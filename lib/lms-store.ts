"use client";

import { useSyncExternalStore } from "react";
import {
  getCourseAssignments,
  getCourseProgramSessions,
  getCourseScheduleSessions,
  getCourseTotalClasses,
  initialNotifications,
  lmsCourses,
  type LmsAssignment,
  type LmsCertificate,
  type LmsNotification,
  type ScheduleSession,
} from "@/data/lms-courses";
import {
  checkLoginRateLimit,
  clearFailedLoginAttempts,
  hashPassword,
  recordFailedLoginAttempt,
  sanitizeText,
  validateEmail,
  validatePasswordStrength,
  verifyPassword,
} from "@/lib/security";

export interface StudentProfile {
  fullName: string;
  dateOfBirth: string;
  email: string;
  mobile: string;
  qualification: string;
  institution: string;
  courseStream: string;
  passingYear: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
}

export interface EnrolledProgress {
  courseId: string;
  completedLessonIds: string[];
  extraCompletedCount: number;
  attendedClassIds?: string[];
  extraAttendedClasses?: number;
  lastAccessed: string;
  lastModuleLabel: string;
  lastLessonLabel: string;
  enrolledAt: number;
}

export interface LmsSettings {
  emailAnnouncements: boolean;
  classReminders: boolean;
  weeklyDigest: boolean;
  weeklyGoalHours: number;
}

export interface StoredAccount {
  id: string;
  passwordHash: string;
  profile: StudentProfile;
  enrolled: Record<string, EnrolledProgress>;
  assignments: LmsAssignment[];
  schedule: ScheduleSession[];
  certificates: LmsCertificate[];
  notifications: LmsNotification[];
  settings: LmsSettings;
}

export interface LmsSessionState {
  hydrated: boolean;
  loggedIn: boolean;
  activeEmail: string | null;
  account: StoredAccount;
}

const STORAGE_KEY = "netcoder:lms:v4";
const CHANGE_EVENT = "netcoder-lms-change";
const DEMO_PASSCODE_SEED = ["Netcoder", "@", "2026"].join("");

function createDemoAccount(): StoredAccount {
  return {
    id: "acc-demo-gourav",
    passwordHash: "",
    profile: {
      fullName: "Gourav Jaryal",
      dateOfBirth: "",
      email: "gouravjaryal94@gmail.com",
      mobile: "+91 98167 32055",
      qualification: "",
      institution: "",
      courseStream: "",
      passingYear: "",
      address: "",
      city: "Dharamshala",
      state: "Himachal Pradesh",
      pinCode: "",
    },
    enrolled: {},
    assignments: [],
    schedule: [],
    certificates: [],
    notifications: initialNotifications,
    settings: {
      emailAnnouncements: true,
      classReminders: true,
      weeklyDigest: false,
      weeklyGoalHours: 8,
    },
  };
}

interface PersistedDatabase {
  activeEmail: string | null;
  accounts: Record<string, StoredAccount>;
}

const DEMO_ACCOUNT = createDemoAccount();

const SERVER_SNAPSHOT: LmsSessionState = {
  hydrated: false,
  loggedIn: false,
  activeEmail: null,
  account: DEMO_ACCOUNT,
};

let cachedRaw: string | null | undefined = undefined;
let cachedSnapshot: LmsSessionState = SERVER_SNAPSHOT;
let memoryDb: PersistedDatabase | null = null;

function defaultDatabase(): PersistedDatabase {
  return {
    activeEmail: null,
    accounts: {
      [DEMO_ACCOUNT.profile.email.toLowerCase()]: DEMO_ACCOUNT,
    },
  };
}

function isValidPersistedDb(value: unknown): value is PersistedDatabase {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<PersistedDatabase>;
  if (!candidate.accounts || typeof candidate.accounts !== "object") return false;
  return true;
}

function readDatabase(): PersistedDatabase {
  if (typeof window === "undefined") return defaultDatabase();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return memoryDb ?? defaultDatabase();
    }
    const parsed: unknown = JSON.parse(raw);
    if (!isValidPersistedDb(parsed)) {
      return defaultDatabase();
    }
    return parsed;
  } catch {
    return memoryDb ?? defaultDatabase();
  }
}

function writeDatabase(db: PersistedDatabase) {
  memoryDb = db;
  if (typeof window !== "undefined") {
    try {
      const serialized = JSON.stringify(db);
      window.localStorage.setItem(STORAGE_KEY, serialized);
      cachedRaw = serialized;
    } catch {
      cachedRaw = "__memory__";
    }
    cachedSnapshot = buildSnapshot(db);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }
}

function buildSnapshot(db: PersistedDatabase): LmsSessionState {
  const emailKey = db.activeEmail?.toLowerCase() ?? null;
  const account =
    (emailKey && db.accounts[emailKey]) ||
    db.accounts[DEMO_ACCOUNT.profile.email.toLowerCase()] ||
    DEMO_ACCOUNT;
  return {
    hydrated: true,
    loggedIn: Boolean(emailKey && db.accounts[emailKey]),
    activeEmail: emailKey && db.accounts[emailKey] ? account.profile.email : null,
    account,
  };
}

function getSnapshot(): LmsSessionState {
  if (typeof window === "undefined") return SERVER_SNAPSHOT;
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    raw = "__memory__";
  }
  if (raw === cachedRaw && cachedSnapshot.hydrated) {
    return cachedSnapshot;
  }
  cachedRaw = raw;
  const db = readDatabase();
  cachedSnapshot = buildSnapshot(db);
  return cachedSnapshot;
}

function getServerSnapshot(): LmsSessionState {
  return SERVER_SNAPSHOT;
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

export function useLmsSession() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export async function syncServerSession(
  account: StoredAccount,
  rememberMe = true,
): Promise<boolean> {
  if (typeof window === "undefined") return false;
  try {
    const res = await fetch("/api/auth/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        uid: account.id,
        email: account.profile.email,
        name: account.profile.fullName,
        rememberMe,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function clearServerSession(): Promise<void> {
  if (typeof window === "undefined") return;
  try {
    await fetch("/api/auth/session", { method: "DELETE" });
  } catch {
    // Ignore network interruption on logout cleanup.
  }
}

export function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "NC";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function getFirstInitial(name: string) {
  const clean = name.trim();
  return clean ? clean[0].toUpperCase() : "N";
}

export function getCourseProgressStats(courseId: string, progress?: EnrolledProgress) {
  const course = lmsCourses.find((c) => c.id === courseId);
  if (!course || !progress) {
    return { completed: 0, total: course?.lessonsCount ?? 0, percent: 0 };
  }
  const total = course.lessonsCount;
  const rawCompleted = progress.extraCompletedCount + progress.completedLessonIds.length;
  const completed = Math.min(total, Math.max(0, rawCompleted));
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
  return { completed, total, percent };
}

export function getCourseAttendanceStats(courseId: string, progress?: EnrolledProgress) {
  const course = lmsCourses.find((c) => c.id === courseId);
  if (!course) {
    return { attended: 0, totalClasses: 0, percent: 0 };
  }
  const totalClasses = getCourseTotalClasses(course);
  if (!progress) {
    return { attended: 0, totalClasses, percent: 0 };
  }
  const rawAttended = (progress.extraAttendedClasses ?? 0) + (progress.attendedClassIds?.length ?? 0);
  const attended = Math.min(totalClasses, Math.max(0, rawAttended));
  const percent = totalClasses > 0 ? Math.round((attended / totalClasses) * 100) : 0;
  return { attended, totalClasses, percent };
}

function syncCertificateForCourse(
  account: StoredAccount,
  courseId: string,
  updatedProgress: EnrolledProgress,
): { certificates: LmsCertificate[]; notifications: LmsNotification[] } {
  const course = lmsCourses.find((c) => c.id === courseId);
  if (!course) {
    return { certificates: account.certificates, notifications: account.notifications };
  }

  const stats = getCourseAttendanceStats(courseId, updatedProgress);
  const hasCert = account.certificates.some((c) => c.courseId === courseId && c.status === "Earned");

  if (stats.totalClasses > 0 && stats.attended >= stats.totalClasses) {
    if (hasCert) {
      return { certificates: account.certificates, notifications: account.notifications };
    }
    const todayLabel = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date());
    const newCert: LmsCertificate = {
      id: `cert-${courseId}`,
      title: course.title,
      courseId,
      issuedOn: todayLabel,
      credentialCode: `NC-${course.slug.slice(0, 3).toUpperCase()}-2026-${String(Math.floor(1000 + Math.random() * 9000))}`,
      hours: course.durationLabel,
      status: "Earned",
    };
    const unlockNotif: LmsNotification = {
      id: `notif-cert-${courseId}-${Date.now()}`,
      title: `Certificate Earned: ${course.title}`,
      message: `You attended all ${stats.totalClasses} classes in ${course.title}. Your certificate is ready in Certificates.`,
      time: "Just now",
      category: "Course",
      read: false,
    };
    return {
      certificates: [newCert, ...account.certificates],
      notifications: [unlockNotif, ...account.notifications],
    };
  }

  if (hasCert && stats.attended < stats.totalClasses) {
    return {
      certificates: account.certificates.filter((c) => c.courseId !== courseId),
      notifications: account.notifications,
    };
  }

  return { certificates: account.certificates, notifications: account.notifications };
}

export async function registerStudent(input: {
  fullName: string;
  email: string;
  mobile: string;
  password: string;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const fullName = sanitizeText(input.fullName, 80);
  const email = sanitizeText(input.email, 254).toLowerCase();
  const mobileDigits = input.mobile.replace(/\D/g, "");

  if (fullName.length < 2) {
    return { ok: false, error: "Please enter your full name (at least 2 characters)." };
  }
  if (!validateEmail(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (mobileDigits.length !== 10) {
    return { ok: false, error: "Please enter a valid 10-digit mobile number." };
  }
  const passwordError = validatePasswordStrength(input.password);
  if (passwordError) {
    return { ok: false, error: passwordError };
  }

  const db = readDatabase();
  if (db.accounts[email]) {
    return { ok: false, error: "An account with this email already exists. Please sign in." };
  }

  const passwordHash = await hashPassword(input.password);
  const newAccount: StoredAccount = {
    id: `acc-${Date.now()}`,
    passwordHash,
    profile: {
      fullName,
      dateOfBirth: "",
      email,
      mobile: `+91 ${mobileDigits.slice(0, 5)} ${mobileDigits.slice(5)}`,
      qualification: "",
      institution: "",
      courseStream: "",
      passingYear: "",
      address: "",
      city: "",
      state: "",
      pinCode: "",
    },
    enrolled: {},
    assignments: [],
    schedule: [],
    certificates: [],
    notifications: initialNotifications,
    settings: {
      emailAnnouncements: true,
      classReminders: true,
      weeklyDigest: false,
      weeklyGoalHours: 8,
    },
  };

  db.accounts[email] = newAccount;
  db.activeEmail = email;
  writeDatabase(db);
  await syncServerSession(newAccount, true);
  return { ok: true };
}

export async function loginStudent(input: {
  email: string;
  password: string;
  rememberMe?: boolean;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const email = sanitizeText(input.email, 254).toLowerCase();
  if (!validateEmail(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (!input.password) {
    return { ok: false, error: "Please enter your password." };
  }

  const rate = checkLoginRateLimit(email);
  if (!rate.allowed) {
    return {
      ok: false,
      error: `Too many failed sign-in attempts. Please wait ${rate.retryAfterSec}s before trying again.`,
    };
  }

  const db = readDatabase();
  const existing = db.accounts[email];
  if (!existing) {
    recordFailedLoginAttempt(email);
    return { ok: false, error: "Invalid email or password." };
  }

  if (existing.id === "acc-demo-gourav" && !existing.passwordHash) {
    existing.passwordHash = await hashPassword(DEMO_PASSCODE_SEED);
    db.accounts[email] = existing;
    writeDatabase(db);
  }

  const passwordOk = await verifyPassword(input.password, existing.passwordHash);
  if (!passwordOk) {
    recordFailedLoginAttempt(email);
    return { ok: false, error: "Invalid email or password." };
  }

  clearFailedLoginAttempts(email);
  db.activeEmail = email;
  writeDatabase(db);
  await syncServerSession(existing, input.rememberMe !== false);
  return { ok: true };
}

export async function loginDemoOrProvider(_provider?: "Google" | "Apple" | "Demo"): Promise<void> {
  const db = readDatabase();
  const demoKey = DEMO_ACCOUNT.profile.email.toLowerCase();
  if (!db.accounts[demoKey]) {
    db.accounts[demoKey] = createDemoAccount();
  }
  if (!db.accounts[demoKey].passwordHash) {
    db.accounts[demoKey].passwordHash = await hashPassword(DEMO_PASSCODE_SEED);
  }
  db.activeEmail = demoKey;
  writeDatabase(db);
  await syncServerSession(db.accounts[demoKey], true);
}

export async function logoutStudent(): Promise<void> {
  const db = readDatabase();
  db.activeEmail = null;
  writeDatabase(db);
  await clearServerSession();
}

function mutateActiveAccount(updater: (account: StoredAccount) => StoredAccount) {
  const db = readDatabase();
  const key = db.activeEmail?.toLowerCase() ?? DEMO_ACCOUNT.profile.email.toLowerCase();
  const current = db.accounts[key] ?? createDemoAccount();
  db.accounts[key] = updater(current);
  if (!db.activeEmail) db.activeEmail = key;
  writeDatabase(db);
}

export function updateStudentProfile(patch: Partial<StudentProfile>): { ok: true } | { ok: false; error: string } {
  const sanitized: Partial<StudentProfile> = {};
  if (patch.fullName !== undefined) {
    const clean = sanitizeText(patch.fullName, 80);
    if (clean.length < 2) return { ok: false, error: "Full name must be at least 2 characters." };
    sanitized.fullName = clean;
  }
  if (patch.email !== undefined) {
    const clean = sanitizeText(patch.email, 254).toLowerCase();
    if (!validateEmail(clean)) return { ok: false, error: "Please enter a valid email address." };
    sanitized.email = clean;
  }
  if (patch.pinCode !== undefined) {
    const clean = sanitizeText(patch.pinCode, 10);
    if (clean && !/^\d{6}$/.test(clean)) {
      return { ok: false, error: "PIN code must be 6 digits." };
    }
    sanitized.pinCode = clean;
  }

  for (const key of [
    "dateOfBirth",
    "mobile",
    "qualification",
    "institution",
    "courseStream",
    "passingYear",
    "address",
    "city",
    "state",
  ] as const) {
    if (patch[key] !== undefined) {
      sanitized[key] = sanitizeText(patch[key], 140);
    }
  }

  mutateActiveAccount((account) => ({
    ...account,
    profile: { ...account.profile, ...sanitized },
  }));
  return { ok: true };
}

export function enrollInCourse(courseId: string) {
  const course = lmsCourses.find((c) => c.id === courseId);
  if (!course) return;
  mutateActiveAccount((account) => {
    if (account.enrolled[courseId]) return account;
    const totalClasses = getCourseTotalClasses(course);
    const newProgress: EnrolledProgress = {
      courseId,
      completedLessonIds: [],
      extraCompletedCount: 0,
      attendedClassIds: [],
      extraAttendedClasses: 0,
      lastAccessed: "Today",
      lastModuleLabel: course.modules[0]?.title ?? course.defaultModuleLabel,
      lastLessonLabel: course.modules[0]?.lessons[0]?.title ?? course.defaultLessonLabel,
      enrolledAt: Date.now(),
    };

    const existingAssignIds = new Set(account.assignments.map((a) => a.id));
    const addedAssignments = getCourseAssignments(course).filter((a) => !existingAssignIds.has(a.id));

    const existingScheduleIds = new Set(account.schedule.map((s) => s.id));
    const addedSchedule = getCourseScheduleSessions(course).filter((s) => !existingScheduleIds.has(s.id));

    const notif: LmsNotification = {
      id: `notif-enroll-${courseId}-${Date.now()}`,
      title: `Selected ${course.title}`,
      message: `${course.title} (${totalClasses} total classes) added to My Learning.`,
      time: "Just now",
      category: "Course",
      read: false,
    };

    return {
      ...account,
      enrolled: { ...account.enrolled, [courseId]: newProgress },
      assignments: [...account.assignments, ...addedAssignments],
      schedule: [...account.schedule, ...addedSchedule],
      notifications: [notif, ...account.notifications],
    };
  });
}

export function unenrollCourse(courseId: string) {
  mutateActiveAccount((account) => {
    if (!account.enrolled[courseId]) return account;
    const nextEnrolled = { ...account.enrolled };
    delete nextEnrolled[courseId];
    return {
      ...account,
      enrolled: nextEnrolled,
      assignments: account.assignments.filter((a) => a.courseId !== courseId),
      schedule: account.schedule.filter((s) => s.courseId !== courseId),
      certificates: account.certificates.filter((c) => c.courseId !== courseId),
    };
  });
}

export function toggleClassAttendance(courseId: string, classId: string) {
  mutateActiveAccount((account) => {
    const course = lmsCourses.find((c) => c.id === courseId);
    if (!course || !account.enrolled[courseId]) return account;
    const existing = account.enrolled[courseId];
    const currentIds = existing.attendedClassIds ?? [];
    const exists = currentIds.includes(classId);
    const updatedIds = exists
      ? currentIds.filter((id) => id !== classId)
      : [...currentIds, classId];

    const updatedProgress: EnrolledProgress = {
      ...existing,
      attendedClassIds: updatedIds,
      lastAccessed: "Today",
    };

    const synced = syncCertificateForCourse(account, courseId, updatedProgress);
    return {
      ...account,
      enrolled: {
        ...account.enrolled,
        [courseId]: updatedProgress,
      },
      certificates: synced.certificates,
      notifications: synced.notifications,
    };
  });
}

export function setAllCourseAttendance(courseId: string, attended: boolean) {
  mutateActiveAccount((account) => {
    const course = lmsCourses.find((c) => c.id === courseId);
    if (!course || !account.enrolled[courseId]) return account;
    const allClassIds = attended ? getCourseProgramSessions(course).map((c) => c.id) : [];
    const updatedProgress: EnrolledProgress = {
      ...account.enrolled[courseId],
      attendedClassIds: allClassIds,
      extraAttendedClasses: 0,
      lastAccessed: "Today",
    };
    const synced = syncCertificateForCourse(account, courseId, updatedProgress);
    return {
      ...account,
      enrolled: {
        ...account.enrolled,
        [courseId]: updatedProgress,
      },
      certificates: synced.certificates,
      notifications: synced.notifications,
    };
  });
}

export function submitStudentAssignment(assignmentId: string, note: string) {
  const cleanNote = sanitizeText(note, 300) || "Submitted via Student Portal";
  mutateActiveAccount((account) => ({
    ...account,
    assignments: account.assignments.map((a) =>
      a.id === assignmentId
        ? { ...a, status: "Submitted", submissionNote: cleanNote }
        : a,
    ),
  }));
}

export function toggleSessionRsvp(sessionId: string) {
  mutateActiveAccount((account) => ({
    ...account,
    schedule: account.schedule.map((s) => (s.id === sessionId ? { ...s, rsvped: !s.rsvped } : s)),
  }));
}

export function markNotificationRead(id: string) {
  mutateActiveAccount((account) => ({
    ...account,
    notifications: account.notifications.map((n) => (n.id === id ? { ...n, read: true } : n)),
  }));
}

export function markAllNotificationsRead() {
  mutateActiveAccount((account) => ({
    ...account,
    notifications: account.notifications.map((n) => ({ ...n, read: true })),
  }));
}

export function updateAccountSettings(patch: Partial<LmsSettings>) {
  mutateActiveAccount((account) => ({
    ...account,
    settings: { ...account.settings, ...patch },
  }));
}

export async function updateAccountPassword(
  currentPassword: string,
  nextPassword: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const passwordError = validatePasswordStrength(nextPassword);
  if (passwordError) {
    return { ok: false, error: passwordError };
  }
  const db = readDatabase();
  const key = db.activeEmail?.toLowerCase();
  if (!key || !db.accounts[key]) {
    return { ok: false, error: "No active account session." };
  }
  const currentAccount = db.accounts[key];
  if (currentAccount.id === "acc-demo-gourav" && !currentAccount.passwordHash) {
    currentAccount.passwordHash = await hashPassword(DEMO_PASSCODE_SEED);
  }
  const matches = await verifyPassword(currentPassword, currentAccount.passwordHash);
  if (!matches) {
    return { ok: false, error: "Current password does not match." };
  }
  db.accounts[key] = { ...currentAccount, passwordHash: await hashPassword(nextPassword) };
  writeDatabase(db);
  return { ok: true };
}

export function resetStudentDemoData() {
  mutateActiveAccount((account) => ({
    ...account,
    enrolled: {},
    assignments: [],
    schedule: [],
    certificates: [],
    notifications: initialNotifications,
  }));
}
