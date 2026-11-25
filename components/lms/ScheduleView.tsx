"use client";

import Link from "next/link";
import { useState } from "react";
import { CalendarIcon, ClockIcon } from "@/components/lms/Icons";
import { toggleSessionRsvp, useLmsSession } from "@/lib/lms-store";
import s from "./lms.module.css";

type ScheduleFilter = "all" | "Upcoming" | "Completed";

export default function ScheduleView() {
  const session = useLmsSession();
  const [filter, setFilter] = useState<ScheduleFilter>("all");

  const items = session.account.schedule.filter((item) =>
    filter === "all" ? true : item.status === filter,
  );

  return (
    <div>
      <div className={s.breadcrumbBar}>Dashboard / Schedule</div>

      <div className={s.pageHeader}>
        <div>
          <h1 className={s.pageTitle}>Class Schedule</h1>
          <p className={s.pageSubtitle}>
            Live studio sessions and campus labs for your selected courses.
          </p>
        </div>
      </div>

      <div className={s.pillTabsRow} role="tablist" aria-label="Filter sessions">
        {(["all", "Upcoming", "Completed"] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={filter === tab}
            className={`${s.pillTab} ${filter === tab ? s.pillTabActive : ""}`}
            onClick={() => setFilter(tab)}
          >
            {tab === "all" ? "All Sessions" : tab}
          </button>
        ))}
      </div>

      {items.length === 0 ? (
        <div className={s.emptyState}>
          <h3>No scheduled classes yet</h3>
          <p className={s.pageSubtitle}>
            Select a course in Explore Courses to view its live studio and campus lab timetable.
          </p>
          <Link href="/dashboard/explore" className={s.primaryBtn}>
            Explore Courses
          </Link>
        </div>
      ) : (
        <div className={s.moduleGrid}>
          {items.map((item) => (
            <article key={item.id} className={s.moduleCard}>
              <div className={s.moduleCardHeader}>
                <span className={`${s.statusBadge} ${item.status === "Upcoming" ? s.badgeOrange : s.badgeNeutral}`}>
                  {item.day} &middot; {item.mode}
                </span>
                <span className={`${s.statusBadge} ${item.status === "Upcoming" ? s.badgeGreen : s.badgeNeutral}`}>
                  {item.status}
                </span>
              </div>

              <div>
                <h3>{item.title}</h3>
                <p className={s.courseMetaLine}>
                  {item.courseTitle} &middot; Mentor: {item.instructor}
                </p>
              </div>

              <div className={s.courseStatsRow}>
                <span className={s.courseStatItem}>
                  <CalendarIcon />
                  {item.dateLabel}
                </span>
                <span className={s.courseStatItem}>
                  <ClockIcon />
                  {item.time}
                </span>
              </div>

              {item.status === "Upcoming" && (
                <div style={{ marginTop: "auto", paddingTop: 4 }}>
                  <button
                    type="button"
                    className={item.rsvped ? s.enrolledBtn : s.enrollBtn}
                    onClick={() => toggleSessionRsvp(item.id)}
                  >
                    {item.rsvped ? "Seat Reserved ✓" : "Reserve Seat"}
                  </button>
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
