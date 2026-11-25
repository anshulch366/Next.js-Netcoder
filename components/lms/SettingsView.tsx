"use client";

import { useState, type FormEvent } from "react";
import {
  resetStudentDemoData,
  updateAccountPassword,
  updateAccountSettings,
  useLmsSession,
} from "@/lib/lms-store";
import s from "./lms.module.css";

export default function SettingsView() {
  const session = useLmsSession();
  const [currentPassword, setCurrentPassword] = useState("");
  const [nextPassword, setNextPassword] = useState("");
  const [passwordStatus, setPasswordStatus] = useState<{ ok: boolean; msg: string } | null>(null);
  const [savingPw, setSavingPw] = useState(false);
  const [resetMessage, setResetMessage] = useState<string | null>(null);

  async function handlePasswordSubmit(event: FormEvent) {
    event.preventDefault();
    if (savingPw) return;
    setSavingPw(true);
    try {
      const res = await updateAccountPassword(currentPassword, nextPassword);
      if (!res.ok) {
        setPasswordStatus({ ok: false, msg: res.error });
        return;
      }
      setCurrentPassword("");
      setNextPassword("");
      setPasswordStatus({ ok: true, msg: "Password updated successfully." });
    } finally {
      setSavingPw(false);
    }
  }

  return (
    <div>
      <div className={s.breadcrumbBar}>Dashboard / Settings</div>

      <div className={s.pageHeader}>
        <div>
          <h1 className={s.pageTitle}>Account Settings</h1>
          <p className={s.pageSubtitle}>
            Manage study goals, notifications, and account security.
          </p>
        </div>
      </div>

      <div className={s.profileGrid}>
        <section className={s.infoCard} aria-labelledby="prefs-heading">
          <div className={s.infoCardHeader}>
            <h3 id="prefs-heading">Learning Preferences</h3>
          </div>

          <label className={s.switchRow}>
            <div>
              <strong style={{ display: "block", fontSize: "0.88rem" }}>Course Announcements</strong>
              <span style={{ fontSize: "0.78rem", color: "#76726f" }}>
                Receive updates when new modules or resources are released.
              </span>
            </div>
            <input
              type="checkbox"
              checked={session.account.settings.emailAnnouncements}
              onChange={(e) => updateAccountSettings({ emailAnnouncements: e.target.checked })}
            />
          </label>

          <label className={s.switchRow}>
            <div>
              <strong style={{ display: "block", fontSize: "0.88rem" }}>Live Class Reminders</strong>
              <span style={{ fontSize: "0.78rem", color: "#76726f" }}>
                Remind me before reserved Live Studio and Campus Lab sessions.
              </span>
            </div>
            <input
              type="checkbox"
              checked={session.account.settings.classReminders}
              onChange={(e) => updateAccountSettings({ classReminders: e.target.checked })}
            />
          </label>

          <label className={s.switchRow}>
            <div>
              <strong style={{ display: "block", fontSize: "0.88rem" }}>Weekly Progress Digest</strong>
              <span style={{ fontSize: "0.78rem", color: "#76726f" }}>
                Summary of completed lessons and pending assignments.
              </span>
            </div>
            <input
              type="checkbox"
              checked={session.account.settings.weeklyDigest}
              onChange={(e) => updateAccountSettings({ weeklyDigest: e.target.checked })}
            />
          </label>

          <div className={s.switchRow}>
            <label htmlFor="weekly-goal" style={{ fontSize: "0.88rem", fontWeight: 600 }}>
              Weekly Study Goal
            </label>
            <select
              id="weekly-goal"
              className={s.sortSelect}
              value={session.account.settings.weeklyGoalHours}
              onChange={(e) => updateAccountSettings({ weeklyGoalHours: Number(e.target.value) })}
            >
              <option value={4}>4 hours / week</option>
              <option value={8}>8 hours / week</option>
              <option value={12}>12 hours / week</option>
              <option value={16}>16 hours / week</option>
            </select>
          </div>
        </section>

        <div className={s.profileCol}>
          <form className={s.infoCard} onSubmit={handlePasswordSubmit}>
            <div className={s.infoCardHeader}>
              <h3>Change Password</h3>
            </div>

            <div className={s.fieldRow}>
              <label htmlFor="cur-pw">Current Password</label>
              <input
                id="cur-pw"
                type="password"
                className={s.fieldInput}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Enter current password"
              />
            </div>

            <div className={s.fieldRow}>
              <label htmlFor="new-pw">New Password</label>
              <input
                id="new-pw"
                type="password"
                className={s.fieldInput}
                value={nextPassword}
                onChange={(e) => setNextPassword(e.target.value)}
                placeholder="8+ characters (letter & number)"
              />
            </div>

            {passwordStatus && (
              <div
                className={passwordStatus.ok ? s.savedNotice : s.errorNotice}
                style={{ marginTop: 10 }}
              >
                {passwordStatus.msg}
              </div>
            )}

            <div style={{ marginTop: 12 }}>
              <button type="submit" className={s.primaryBtn} disabled={savingPw}>
                {savingPw ? "Updating..." : "Update Password"}
              </button>
            </div>
          </form>

          <section className={s.infoCard}>
            <div className={s.infoCardHeader}>
              <h3>Workspace Data</h3>
            </div>
            <p style={{ margin: "0 0 12px", fontSize: "0.84rem" }}>
              Clear your selected courses, class attendance, assignments, and certificates to start fresh from zero.
            </p>
            {resetMessage && (
              <div className={s.savedNotice} style={{ marginBottom: 10 }}>
                {resetMessage}
              </div>
            )}
            <button
              type="button"
              className={s.secondaryBtn}
              onClick={() => {
                resetStudentDemoData();
                setResetMessage("Workspace data cleared.");
              }}
            >
              Reset LMS Data
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
