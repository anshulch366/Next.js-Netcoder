"use client";

import Link from "next/link";
import { useState } from "react";
import { CalendarIcon } from "@/components/lms/Icons";
import { getCourseAssignments, lmsCourses } from "@/data/lms-courses";
import { submitStudentAssignment, useLmsSession } from "@/lib/lms-store";
import s from "./lms.module.css";

type AssignmentFilter = "all" | "Pending" | "Submitted";

export default function AssignmentsView() {
  const session = useLmsSession();
  const [filter, setFilter] = useState<AssignmentFilter>("all");
  const [notes, setNotes] = useState<Record<string, string>>({});

  const assignments = session.account.assignments;
  const demoCourse = lmsCourses.find((course) => course.id === assignments[0]?.courseId);
  const extraAssignment = demoCourse ? getCourseAssignments(demoCourse)[2] : null;
  const allAssignments = extraAssignment && !assignments.some((item) => item.id === extraAssignment.id)
    ? [...assignments, extraAssignment]
    : assignments;
  const pendingCount = allAssignments.filter((a) => a.status === "Pending").length;
  const submittedCount = allAssignments.filter((a) => a.status === "Submitted").length;

  const visible = allAssignments.filter((a) =>
    filter === "all" ? true : a.status === filter,
  );

  return (
    <div className={s.pageWidth}>
      <div className={s.breadcrumbBar}>Dashboard / Assignments</div>

      <div className={s.pageHeader}>
        <div>
          <h1 className={s.pageTitle}>Assignments</h1>
          <p className={s.pageSubtitle}>
            Coursework deliverables for your selected programs.
          </p>
        </div>
      </div>

      <div className={s.pillTabsRow} role="tablist" aria-label="Filter assignments">
        <button
          type="button"
          role="tab"
          aria-selected={filter === "all"}
          className={`${s.pillTab} ${filter === "all" ? s.pillTabActive : ""}`}
          onClick={() => setFilter("all")}
        >
          All ({allAssignments.length})
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={filter === "Pending"}
          className={`${s.pillTab} ${filter === "Pending" ? s.pillTabActive : ""}`}
          onClick={() => setFilter("Pending")}
        >
          Pending ({pendingCount})
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={filter === "Submitted"}
          className={`${s.pillTab} ${filter === "Submitted" ? s.pillTabActive : ""}`}
          onClick={() => setFilter("Submitted")}
        >
          Submitted ({submittedCount})
        </button>
      </div>

      {visible.length === 0 ? (
        <div className={s.emptyState}>
          <h3>No assignments available</h3>
          <p className={s.pageSubtitle}>
            Select a course in Explore Courses to unlock its practical coursework tasks.
          </p>
          <Link href="/dashboard/explore" className={s.primaryBtn}>
            Explore Courses
          </Link>
        </div>
      ) : (
        <div className={`${s.moduleGrid} ${s.assignmentGrid}`}>
          {visible.map((item) => (
            <article key={item.id} className={s.moduleCard}>
              <div className={s.moduleCardHeader}>
                <div>
                  <h3>{item.title}</h3>
                  <p className={s.courseMetaLine}>
                    {item.courseTitle} &middot; {item.moduleLabel}
                  </p>
                </div>
                <span className={`${s.statusBadge} ${item.status === "Pending" ? s.badgeOrange : s.badgeGreen}`}>
                  {item.status}
                </span>
              </div>

              <p style={{ margin: 0, fontSize: "0.85rem" }}>{item.brief}</p>

              <div className={s.courseStatsRow}>
                <span className={s.courseStatItem}>
                  <CalendarIcon />
                  Due {item.dueDate}
                </span>
                <Link href={`/dashboard/courses/${item.courseId}`} className={s.inlineActionLink}>
                  About Course &rarr;
                </Link>
              </div>

              {item.status === "Pending" ? (
                <div style={{ display: "flex", gap: 8, marginTop: "auto", paddingTop: 6 }}>
                  <input
                    type="text"
                    className={s.fieldInput}
                    placeholder="Paste project URL or submission note"
                    value={notes[item.id] ?? ""}
                    onChange={(e) => setNotes((prev) => ({ ...prev, [item.id]: e.target.value }))}
                  />
                  <button
                    type="button"
                    className={s.enrollBtn}
                    style={{ flexShrink: 0 }}
                    onClick={() => submitStudentAssignment(item.id, notes[item.id] ?? "")}
                  >
                    Submit
                  </button>
                </div>
              ) : (
                <div className={s.continueBox} style={{ marginTop: "auto" }}>
                  <span className={s.continueLabel}>Submission Note</span>
                  <span>{item.submissionNote || "Submitted"}</span>
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
