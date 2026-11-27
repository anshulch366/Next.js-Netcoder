"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { AwardIcon, BookIcon, CalendarIcon, CheckSquareIcon, EditIcon } from "@/components/lms/Icons";
import { lmsCourses } from "@/data/lms-courses";
import {
  getCourseAttendanceStats,
  getInitials,
  updateStudentProfile,
  useLmsSession,
  type StudentProfile,
} from "@/lib/lms-store";
import s from "./lms.module.css";

function padTwo(value: number) {
  return String(value).padStart(2, "0");
}

function renderFieldValue(value: string) {
  if (!value.trim()) {
    return <div className={s.emptyValue}>Not added yet</div>;
  }
  return <div className={s.fieldValue}>{value}</div>;
}

export default function ProfileView() {
  const session = useLmsSession();
  const [draft, setDraft] = useState<StudentProfile>(session.account.profile);
  const [editPersonal, setEditPersonal] = useState(false);
  const [editEducation, setEditEducation] = useState(false);
  const [editContact, setEditContact] = useState(false);
  const [savedMsg, setSavedMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    setDraft(session.account.profile);
  }, [session.account.profile]);

  const selectedEntries = Object.values(session.account.enrolled)
    .map((progress) => {
      const course = lmsCourses.find((c) => c.id === progress.courseId);
      if (!course) return null;
      return { course, attendance: getCourseAttendanceStats(course.id, progress) };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  const totalAttendedClasses = selectedEntries.reduce((sum, item) => sum + item.attendance.attended, 0);
  const totalScheduledClasses = selectedEntries.reduce((sum, item) => sum + item.attendance.totalClasses, 0);
  const pendingTasks = session.account.assignments.filter((a) => a.status === "Pending").length;
  const earnedCertificates = session.account.certificates.filter((c) => c.status === "Earned").length;
  const overallPercent =
    totalScheduledClasses > 0 ? Math.round((totalAttendedClasses / totalScheduledClasses) * 100) : 0;

  function setField(key: keyof StudentProfile, value: string) {
    setDraft((prev) => ({ ...prev, [key]: value }));
    setSavedMsg(null);
    setErrorMsg(null);
  }

  function handleSave(event: FormEvent) {
    event.preventDefault();
    const res = updateStudentProfile(draft);
    if (!res.ok) {
      setErrorMsg(res.error);
      return;
    }
    setEditPersonal(false);
    setEditEducation(false);
    setEditContact(false);
    setErrorMsg(null);
    setSavedMsg("Profile details saved.");
  }

  function toggleAllEdit() {
    const next = !(editPersonal && editEducation && editContact);
    setEditPersonal(next);
    setEditEducation(next);
    setEditContact(next);
    setSavedMsg(null);
  }

  return (
    <div className={s.pageWidth}>
      <div className={s.breadcrumbBar}>Dashboard / My Profile</div>

      <div className={s.pageHeader}>
        <div>
          <h1 className={s.pageTitle}>My Profile</h1>
          <p className={s.pageSubtitle}>Manage your personal information and student details.</p>
        </div>
      </div>

      <section className={s.identityBanner} aria-label="Student identity">
        <div className={s.identityLeft}>
          <div className={s.avatarCircle}>
            <span>{getInitials(draft.fullName)}</span>
            <span className={s.avatarBadgeAt} aria-hidden="true">@</span>
          </div>
          <div>
            <h2>{draft.fullName}</h2>
            <p>{draft.email}</p>
          </div>
        </div>
        <button
          type="button"
          className={s.editSquareBtn}
          aria-label="Edit profile information"
          onClick={toggleAllEdit}
        >
          <EditIcon />
        </button>
      </section>

      <div className={s.profileGrid}>
        <form className={s.profileCol} onSubmit={handleSave}>
          <section className={s.infoCard} aria-labelledby="personal-info-heading">
            <div className={s.infoCardHeader}>
              <h3 id="personal-info-heading">Personal Information</h3>
              <button
                type="button"
                className={s.inlineActionLink}
                onClick={() => setEditPersonal((prev) => !prev)}
              >
                {editPersonal ? "Done" : "Edit"}
              </button>
            </div>

            <div className={s.fieldRow}>
              <label htmlFor="prof-name">Full Name</label>
              {editPersonal ? (
                <input
                  id="prof-name"
                  className={s.fieldInput}
                  value={draft.fullName}
                  onChange={(e) => setField("fullName", e.target.value)}
                />
              ) : (
                renderFieldValue(draft.fullName)
              )}
            </div>

            <div className={s.fieldRow}>
              <label htmlFor="prof-dob">Date Of Birth</label>
              {editPersonal ? (
                <input
                  id="prof-dob"
                  className={s.fieldInput}
                  placeholder="DD / MM / YYYY"
                  value={draft.dateOfBirth}
                  onChange={(e) => setField("dateOfBirth", e.target.value)}
                />
              ) : (
                renderFieldValue(draft.dateOfBirth)
              )}
            </div>

            <div className={s.fieldRow}>
              <label htmlFor="prof-email">Email Address</label>
              {editPersonal ? (
                <input
                  id="prof-email"
                  type="email"
                  className={s.fieldInput}
                  value={draft.email}
                  onChange={(e) => setField("email", e.target.value)}
                />
              ) : (
                renderFieldValue(draft.email)
              )}
            </div>

            <div className={s.fieldRow}>
              <label htmlFor="prof-mobile">Mobile Number</label>
              {editPersonal ? (
                <input
                  id="prof-mobile"
                  className={s.fieldInput}
                  placeholder="+91 XXXXX XXXXX"
                  value={draft.mobile}
                  onChange={(e) => setField("mobile", e.target.value)}
                />
              ) : (
                renderFieldValue(draft.mobile)
              )}
            </div>
          </section>

          <section className={s.infoCard} aria-labelledby="education-info-heading">
            <div className={s.infoCardHeader}>
              <h3 id="education-info-heading">Educational Details</h3>
              <button
                type="button"
                className={s.inlineActionLink}
                onClick={() => setEditEducation((prev) => !prev)}
              >
                {editEducation ? "Done" : "Edit"}
              </button>
            </div>

            <div className={s.fieldRow}>
              <label htmlFor="prof-qual">Qualification</label>
              {editEducation ? (
                <input
                  id="prof-qual"
                  className={s.fieldInput}
                  placeholder="e.g. Undergraduate, Graduate, Diploma"
                  value={draft.qualification}
                  onChange={(e) => setField("qualification", e.target.value)}
                />
              ) : (
                renderFieldValue(draft.qualification)
              )}
            </div>

            <div className={s.fieldRow}>
              <label htmlFor="prof-inst">Institution</label>
              {editEducation ? (
                <input
                  id="prof-inst"
                  className={s.fieldInput}
                  placeholder="Your college or school name"
                  value={draft.institution}
                  onChange={(e) => setField("institution", e.target.value)}
                />
              ) : (
                renderFieldValue(draft.institution)
              )}
            </div>

            <div className={s.fieldRow}>
              <label htmlFor="prof-stream">Course / Stream</label>
              {editEducation ? (
                <input
                  id="prof-stream"
                  className={s.fieldInput}
                  placeholder="e.g. BCA, B.Tech, B.Des"
                  value={draft.courseStream}
                  onChange={(e) => setField("courseStream", e.target.value)}
                />
              ) : (
                renderFieldValue(draft.courseStream)
              )}
            </div>

            <div className={s.fieldRow}>
              <label htmlFor="prof-year">Passing Year</label>
              {editEducation ? (
                <input
                  id="prof-year"
                  className={s.fieldInput}
                  placeholder="e.g. 2026"
                  value={draft.passingYear}
                  onChange={(e) => setField("passingYear", e.target.value)}
                />
              ) : (
                renderFieldValue(draft.passingYear)
              )}
            </div>
          </section>

          <section className={s.infoCard} aria-labelledby="contact-info-heading">
            <div className={s.infoCardHeader}>
              <h3 id="contact-info-heading">Contact Information</h3>
              <button
                type="button"
                className={s.inlineActionLink}
                onClick={() => setEditContact((prev) => !prev)}
              >
                {editContact ? "Done" : "Edit"}
              </button>
            </div>

            <div className={s.fieldRow}>
              <label htmlFor="prof-addr">Address</label>
              {editContact ? (
                <input
                  id="prof-addr"
                  className={s.fieldInput}
                  placeholder="Your residential address"
                  value={draft.address}
                  onChange={(e) => setField("address", e.target.value)}
                />
              ) : (
                renderFieldValue(draft.address)
              )}
            </div>

            <div className={s.fieldRow}>
              <label htmlFor="prof-city">City</label>
              {editContact ? (
                <input
                  id="prof-city"
                  className={s.fieldInput}
                  placeholder="City"
                  value={draft.city}
                  onChange={(e) => setField("city", e.target.value)}
                />
              ) : (
                renderFieldValue(draft.city)
              )}
            </div>

            <div className={s.fieldRow}>
              <label htmlFor="prof-state">State</label>
              {editContact ? (
                <input
                  id="prof-state"
                  className={s.fieldInput}
                  placeholder="State"
                  value={draft.state}
                  onChange={(e) => setField("state", e.target.value)}
                />
              ) : (
                renderFieldValue(draft.state)
              )}
            </div>

            <div className={s.fieldRow}>
              <label htmlFor="prof-pin">PIN Code</label>
              {editContact ? (
                <input
                  id="prof-pin"
                  className={s.fieldInput}
                  placeholder="PIN code"
                  value={draft.pinCode}
                  onChange={(e) => setField("pinCode", e.target.value)}
                />
              ) : (
                renderFieldValue(draft.pinCode)
              )}
            </div>
          </section>

          {errorMsg && <div className={s.errorNotice}>{errorMsg}</div>}
          {savedMsg && <div className={s.savedNotice}>{savedMsg}</div>}

          <div>
            <button type="submit" className={s.primaryBtn}>
              Save profile changes
            </button>
          </div>
        </form>

        <div className={s.profileCol}>
          <section aria-labelledby="learning-overview-heading">
            <h2 id="learning-overview-heading" className={s.sectionHeading} style={{ marginBottom: 12 }}>
              Learning Overview
            </h2>
            <div className={s.metricsGrid}>
              <div className={s.metricCard}>
                <div className={s.metricTop}>
                  <span>Selected Courses</span>
                  <BookIcon style={{ color: "#ff7a45" }} />
                </div>
                <strong className={s.metricNumber}>{padTwo(selectedEntries.length)}</strong>
                <span className={s.metricSub}>Active Programs</span>
              </div>

              <div className={s.metricCard}>
                <div className={s.metricTop}>
                  <span>Classes Attended</span>
                  <CheckSquareIcon style={{ color: "#2ea44f" }} />
                </div>
                <strong className={s.metricNumber}>
                  {padTwo(totalAttendedClasses)}/{padTwo(totalScheduledClasses)}
                </strong>
                <span className={s.metricSub}>Attended / Total Classes</span>
              </div>

              <div className={s.metricCard}>
                <div className={s.metricTop}>
                  <span>Pending Tasks</span>
                  <CalendarIcon style={{ color: "#e85d3f" }} />
                </div>
                <strong className={s.metricNumber}>{padTwo(pendingTasks)}</strong>
                <span className={s.metricSub}>Assignments To Submit</span>
              </div>

              <div className={s.metricCard}>
                <div className={s.metricTop}>
                  <span>Certificates</span>
                  <AwardIcon style={{ color: "#2d6cdf" }} />
                </div>
                <strong className={s.metricNumber}>{padTwo(earnedCertificates)}</strong>
                <span className={s.metricSub}>Earned Certificates</span>
              </div>
            </div>
          </section>

          <section aria-labelledby="learning-progress-heading">
            <h2 id="learning-progress-heading" className={s.sectionHeading} style={{ marginBottom: 12 }}>
              Class Attendance
            </h2>
            <div className={s.progressSummaryCard}>
              <div>
                <div className={s.progressHeader}>
                  <span style={{ fontWeight: 700, color: "#1c1b1a" }}>Overall Attendance</span>
                  <strong>
                    {totalAttendedClasses} / {totalScheduledClasses} ({overallPercent}%)
                  </strong>
                </div>
                <div className={s.progressTrack}>
                  <div className={s.progressFill} style={{ width: `${overallPercent}%` }} />
                </div>
              </div>

              {selectedEntries.length === 0 ? (
                <div style={{ paddingTop: 4 }}>
                  <p style={{ margin: "0 0 10px", fontSize: "0.84rem" }}>
                    No courses selected yet. Choose a program in Explore Courses to start tracking attendance.
                  </p>
                  <Link href="/dashboard/explore" className={s.inlineActionLink}>
                    Explore Courses &rarr;
                  </Link>
                </div>
              ) : (
                selectedEntries.map(({ course, attendance }) => (
                  <div key={course.id} className={s.progressCourseItem}>
                    <div className={s.progressHeader}>
                      <span>{course.title}</span>
                      <strong>
                        {attendance.attended} / {attendance.totalClasses} Classes
                      </strong>
                    </div>
                    <div className={s.progressTrack}>
                      <div className={s.progressFill} style={{ width: `${attendance.percent}%` }} />
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
