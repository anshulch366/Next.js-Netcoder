"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { SearchIcon } from "@/components/lms/Icons";
import { lmsCourses } from "@/data/lms-courses";
import {
  getCourseAttendanceStats,
  unenrollCourse,
  useLmsSession,
} from "@/lib/lms-store";
import s from "./lms.module.css";

type StatusTab = "all" | "in-progress" | "completed";
type SortMode = "recent" | "attendance" | "title";

export default function MyLearningView() {
  const session = useLmsSession();
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<StatusTab>("all");
  const [sortBy, setSortBy] = useState<SortMode>("recent");
  const [expandedPrograms, setExpandedPrograms] = useState<Record<string, boolean>>({});

  const selectedItems = useMemo(() => {
    return Object.values(session.account.enrolled)
      .map((progress) => {
        const course = lmsCourses.find((item) => item.id === progress.courseId);
        if (!course) return null;
        const attendance = getCourseAttendanceStats(course.id, progress);
        return { course, progress, attendance };
      })
      .filter((entry): entry is NonNullable<typeof entry> => entry !== null);
  }, [session.account.enrolled]);

  const inProgressCount = selectedItems.filter((item) => item.attendance.percent < 100).length;
  const completedCount = selectedItems.filter((item) => item.attendance.percent >= 100).length;

  const visibleItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = selectedItems.filter(({ course, attendance }) => {
      if (tab === "in-progress" && attendance.percent >= 100) return false;
      if (tab === "completed" && attendance.percent < 100) return false;
      if (q) {
        const moduleText = course.modules.map((m) => m.title).join(" ");
        const text = `${course.title} ${course.subtitle} ${course.category} ${moduleText}`.toLowerCase();
        if (!text.includes(q)) return false;
      }
      return true;
    });

    return [...filtered].sort((a, b) => {
      if (sortBy === "attendance") return b.attendance.percent - a.attendance.percent;
      if (sortBy === "title") return a.course.title.localeCompare(b.course.title);
      return b.progress.enrolledAt - a.progress.enrolledAt;
    });
  }, [selectedItems, query, tab, sortBy]);

  function toggleProgram(courseId: string) {
    setExpandedPrograms((prev) => ({
      ...prev,
      [courseId]: !prev[courseId],
    }));
  }

  return (
    <div>
      <div className={s.breadcrumbBar}>Dashboard / My Learning</div>

      <div className={s.pageHeader}>
        <div>
          <h1 className={s.pageTitle}>My Learning</h1>
          <p className={s.pageSubtitle}>
            Selected courses, program syllabus, and attended vs total classes.
          </p>
        </div>
        <Link href="/dashboard/explore" className={s.secondaryBtn}>
          + Select Courses
        </Link>
      </div>

      <label className={s.searchBar} aria-label="Search your selected courses">
        <SearchIcon />
        <input
          type="search"
          placeholder="Search your selected courses or programs"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>

      <div className={s.pillTabsRow} role="tablist" aria-label="Selected courses filter">
        <button
          type="button"
          role="tab"
          aria-selected={tab === "all"}
          className={`${s.pillTab} ${tab === "all" ? s.pillTabActive : ""}`}
          onClick={() => setTab("all")}
        >
          Selected Courses ({selectedItems.length})
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "in-progress"}
          className={`${s.pillTab} ${tab === "in-progress" ? s.pillTabActive : ""}`}
          onClick={() => setTab("in-progress")}
        >
          In Progress ({inProgressCount})
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "completed"}
          className={`${s.pillTab} ${tab === "completed" ? s.pillTabActive : ""}`}
          onClick={() => setTab("completed")}
        >
          Completed ({completedCount})
        </button>
      </div>

      <div className={s.sectionBar}>
        <h2 className={s.sectionHeading}>Your Selected Courses</h2>
        <select
          aria-label="Sort selected courses"
          className={s.sortSelect}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortMode)}
        >
          <option value="recent">sort by: Recently Selected</option>
          <option value="attendance">sort by: Most Classes Attended</option>
          <option value="title">sort by: Title A-Z</option>
        </select>
      </div>

      {visibleItems.length === 0 ? (
        <div className={s.emptyState}>
          <h3>No courses selected yet</h3>
          <p className={s.pageSubtitle}>
            Select a course in Explore Courses to view its program and track classes attended out of total classes.
          </p>
          <Link href="/dashboard/explore" className={s.primaryBtn}>
            Explore Courses
          </Link>
        </div>
      ) : (
        <div className={s.learningGrid}>
          {visibleItems.map(({ course, attendance }) => {
            const isProgramOpen = expandedPrograms[course.id] ?? true;
            return (
              <article key={course.id} className={s.learningCard}>
                <div className={s.cardBannerWrap}>
                  <Image
                    src={course.banner}
                    alt={course.title}
                    fill
                    sizes="(max-width: 680px) 100vw, 480px"
                    className={s.cardBannerImg}
                  />
                </div>

                <div className={s.moduleCardHeader}>
                  <div>
                    <h3>{course.title}</h3>
                    <p className={s.learningSub}>
                      {course.category} Program &middot; {course.level}
                    </p>
                  </div>
                  <button
                    type="button"
                    className={s.inlineActionLink}
                    onClick={() => unenrollCourse(course.id)}
                    aria-label={`Remove ${course.title} from My Learning`}
                  >
                    Remove
                  </button>
                </div>

                <div className={s.attendanceCard}>
                  <div className={s.attendanceCountsGrid}>
                    <div className={s.attendanceStatCell}>
                      <span className={s.attendanceStatLabel}>Classes Attended</span>
                      <strong className={s.attendanceStatValue}>{attendance.attended}</strong>
                    </div>
                    <div className={s.attendanceStatCell}>
                      <span className={s.attendanceStatLabel}>Total Classes</span>
                      <strong className={s.attendanceStatValue}>{attendance.totalClasses}</strong>
                    </div>
                  </div>
                  <div className={s.progressTrack}>
                    <div className={s.progressFill} style={{ width: `${attendance.percent}%` }} />
                  </div>
                </div>

                <div className={s.programBox}>
                  <div className={s.programBoxHead}>
                    <span className={s.continueLabel}>
                      Program Syllabus ({course.modules.length} Modules)
                    </span>
                    <button
                      type="button"
                      className={s.inlineActionLink}
                      aria-expanded={isProgramOpen}
                      onClick={() => toggleProgram(course.id)}
                    >
                      {isProgramOpen ? "Hide Program" : "Show Program"}
                    </button>
                  </div>

                  {isProgramOpen && (
                    <ul className={s.programModuleList}>
                      {course.modules.map((mod) => (
                        <li key={mod.id} className={s.programModuleItem}>
                          <strong>{mod.title}</strong>
                          <span>{mod.lessons.length} topics</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <Link
                  href={`/dashboard/courses/${course.id}`}
                  className={`${s.primaryBtn} ${s.primaryBtnFull}`}
                >
                  About Course &amp; Attendance
                </Link>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
