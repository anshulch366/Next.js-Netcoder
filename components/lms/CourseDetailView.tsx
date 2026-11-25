"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { AwardIcon, CalendarIcon, CheckSquareIcon, ClockIcon } from "@/components/lms/Icons";
import { getCourseProgramSessions, type LmsCourse } from "@/data/lms-courses";
import {
  enrollInCourse,
  getCourseAttendanceStats,
  setAllCourseAttendance,
  toggleClassAttendance,
  unenrollCourse,
  useLmsSession,
} from "@/lib/lms-store";
import s from "./lms.module.css";

export default function CourseDetailView({ course }: { course: LmsCourse }) {
  const session = useLmsSession();
  const enrolled = session.account.enrolled[course.id];
  const attendance = getCourseAttendanceStats(course.id, enrolled);

  const programClasses = useMemo(() => getCourseProgramSessions(course), [course]);
  const attendedIds = enrolled?.attendedClassIds ?? [];
  const hasEarnedCertificate = session.account.certificates.some(
    (c) => c.courseId === course.id && c.status === "Earned",
  );

  return (
    <div>
      <div className={s.breadcrumbBar}>
        <Link href="/dashboard">Dashboard</Link> /{" "}
        <Link href="/dashboard/explore">Explore Courses</Link> / {course.title}
      </div>

      <section className={s.heroBanner} style={{ display: "grid", gap: 16 }}>
        <div className={s.courseHeroSplit}>
          <div>
            <span className={s.softPill}>
              {course.category} Program &middot; {course.level}
            </span>
            <h1 className={s.pageTitle}>{course.title}</h1>
            <p className={s.pageSubtitle} style={{ marginTop: 8 }}>
              {course.subtitle}
            </p>
            <div className={s.courseStatsRow} style={{ marginTop: 12 }}>
              <span className={s.courseStatItem}>
                <CalendarIcon />
                {attendance.totalClasses} Total Classes
              </span>
              <span className={s.courseStatItem}>
                <ClockIcon />
                {course.durationLabel}
              </span>
              <span>Instructor: {course.instructor}</span>
              <span>Fee: {course.priceLabel}</span>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16 }}>
              {!enrolled ? (
                <button
                  type="button"
                  className={s.primaryBtn}
                  onClick={() => enrollInCourse(course.id)}
                >
                  Select Course
                </button>
              ) : (
                <>
                  <span className={`${s.statusBadge} ${s.badgeGreen}`}>
                    Selected &middot; {attendance.attended} / {attendance.totalClasses} Classes Attended
                  </span>
                  <button
                    type="button"
                    className={s.secondaryBtn}
                    onClick={() => unenrollCourse(course.id)}
                  >
                    Remove Course
                  </button>
                </>
              )}
              {hasEarnedCertificate && (
                <Link href="/dashboard/certificates" className={s.primaryBtn}>
                  <AwardIcon style={{ width: 16, height: 16 }} />
                  <span>View Earned Certificate</span>
                </Link>
              )}
              {course.externalFieldGuideHref && (
                <Link href={course.externalFieldGuideHref} className={s.secondaryBtn}>
                  Open Reference Guide &rarr;
                </Link>
              )}
            </div>
          </div>

          <div className={s.exploreBannerWrap}>
            <Image
              src={course.banner}
              alt={course.title}
              fill
              priority
              sizes="(max-width: 960px) 100vw, 380px"
              className={s.cardBannerImg}
            />
          </div>
        </div>
      </section>

      <div className={s.aboutGrid}>
        <section className={s.infoCard} aria-labelledby="about-course-heading">
          <div className={s.infoCardHeader}>
            <h2 id="about-course-heading" className={s.sectionHeading}>
              About This Course
            </h2>
          </div>
          <p style={{ margin: "0 0 14px", fontSize: "0.9rem", lineHeight: 1.6 }}>
            {course.description}
          </p>

          <div className={s.fieldRow}>
            <span className={s.fieldLabel}>Program Format</span>
            <div className={s.fieldValue}>
              Live Studio Sessions &amp; Hands-On Mentor Reviews ({course.durationLabel})
            </div>
          </div>
          <div className={s.fieldRow}>
            <span className={s.fieldLabel}>Certification Requirement</span>
            <div className={s.fieldValue}>
              Attend all {attendance.totalClasses} program classes (100% attendance) to unlock your verified certificate.
            </div>
          </div>
          <div className={s.fieldRow} style={{ borderBottom: 0 }}>
            <span className={s.fieldLabel}>Skills You Will Build</span>
            <div className={s.skillsWrap}>
              {course.skills.map((skill) => (
                <span key={skill} className={s.skillPill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className={s.infoCard} aria-labelledby="program-curriculum-heading">
          <div className={s.infoCardHeader}>
            <h2 id="program-curriculum-heading" className={s.sectionHeading}>
              Program Curriculum
            </h2>
            <span className={s.courseMetaLine} style={{ margin: 0 }}>
              {course.modules.length} Modules
            </span>
          </div>

          <div className={s.stackList}>
            {course.modules.map((mod) => (
              <div key={mod.id} className={s.moduleAccordion}>
                <div className={s.moduleAccordionHead}>{mod.title}</div>
                <ul className={s.syllabusList}>
                  {mod.lessons.map((topic) => (
                    <li key={topic.id} className={s.syllabusItem}>
                      <div>
                        <strong>{topic.title.replace(/^Lesson \d+\s*·\s*/i, "")}</strong>
                        <span>{topic.summary}</span>
                      </div>
                      <small>{topic.duration}</small>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className={s.infoCard} style={{ marginTop: 18 }} aria-labelledby="attendance-tracker-heading">
        <div className={s.sectionBar}>
          <div>
            <h2 id="attendance-tracker-heading" className={s.sectionHeading}>
              Class Attendance
            </h2>
            <p className={s.pageSubtitle} style={{ marginTop: 2 }}>
              Track attended classes toward your {course.title} completion certificate.
            </p>
          </div>

          {enrolled && (
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <button
                type="button"
                className={s.secondaryBtn}
                onClick={() => setAllCourseAttendance(course.id, true)}
              >
                <CheckSquareIcon style={{ width: 15, height: 15 }} />
                <span>Mark All Attended</span>
              </button>
              {attendance.attended > 0 && (
                <button
                  type="button"
                  className={s.secondaryBtn}
                  onClick={() => setAllCourseAttendance(course.id, false)}
                >
                  Reset Attendance
                </button>
              )}
            </div>
          )}
        </div>

        <div className={s.attendanceCard} style={{ marginBottom: 16 }}>
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
          <div className={s.progressHeader} style={{ marginBottom: 0 }}>
            <span>Attendance Progress</span>
            <strong>{attendance.percent}%</strong>
          </div>
          <div className={s.progressTrack}>
            <div className={s.progressFill} style={{ width: `${attendance.percent}%` }} />
          </div>
        </div>

        {!enrolled ? (
          <div className={s.emptyState}>
            <h3>Course not selected yet</h3>
            <p className={s.pageSubtitle}>
              Select {course.title} to add it to My Learning, unlock its schedule and assignments, and mark class attendance.
            </p>
            <button
              type="button"
              className={s.primaryBtn}
              onClick={() => enrollInCourse(course.id)}
            >
              Select Course
            </button>
          </div>
        ) : (
          <div className={s.moduleGrid}>
            {programClasses.map((cls) => {
              const attended = attendedIds.includes(cls.id);
              return (
                <article key={cls.id} className={s.moduleCard}>
                  <div className={s.moduleCardHeader}>
                    <div>
                      <h3>{cls.title}</h3>
                      <p className={s.courseMetaLine}>
                        {cls.moduleTitle} &middot; {cls.duration}
                      </p>
                    </div>
                    <span className={`${s.statusBadge} ${attended ? s.badgeGreen : s.badgeNeutral}`}>
                      {attended ? "Attended" : "Pending"}
                    </span>
                  </div>

                  <div style={{ marginTop: "auto", paddingTop: 4 }}>
                    <button
                      type="button"
                      className={attended ? s.enrolledBtn : s.enrollBtn}
                      onClick={() => toggleClassAttendance(course.id, cls.id)}
                    >
                      {attended ? "Attended ✓" : "Mark Attended"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
