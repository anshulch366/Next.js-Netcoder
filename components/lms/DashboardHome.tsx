"use client";

import Image from "next/image";
import Link from "next/link";
import { BellIcon, BookIcon, UserIcon } from "@/components/lms/Icons";
import { lmsCourses } from "@/data/lms-courses";
import { getCourseAttendanceStats, useLmsSession } from "@/lib/lms-store";
import s from "./lms.module.css";

const featuredCourses = lmsCourses.slice(0, 2);

const onboardingSteps = [
  {
    title: "01. Complete Your Profile",
    description: "Add your personal, educational and contact details.",
    href: "/dashboard/profile",
    cta: "Complete Profile",
    icon: UserIcon,
  },
  {
    title: "02. Select Courses & View Programs",
    description: "Pick courses in Explore Courses to see your program modules and class attendance.",
    href: "/dashboard/explore",
    cta: "Explore Courses",
    icon: BookIcon,
  },
  {
    title: "03. Stay Updated",
    description: "Keep track of announcements, class schedules and important updates.",
    href: "/dashboard/notifications",
    cta: "View Notifications",
    icon: BellIcon,
  },
];

export default function DashboardHome() {
  const session = useLmsSession();

  const selectedCourses = Object.values(session.account.enrolled)
    .map((progress) => {
      const course = lmsCourses.find((item) => item.id === progress.courseId);
      if (!course) return null;
      return {
        course,
        attendance: getCourseAttendanceStats(course.id, progress),
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  return (
    <div className={s.pageWidth}>
      <div className={s.breadcrumbBar}>Home / Dashboard</div>

      <div className={s.pageHeader}>
        <div>
          <h1 className={s.pageTitle}>Welcome To Netcoder</h1>
          <p className={s.pageSubtitle}>Your space to learn, explore and grow.</p>
        </div>
      </div>

      <section className={s.heroBanner} aria-labelledby="hero-cta-heading">
        <div className={s.heroBannerContent}>
          <span className={s.softPill}>Get Started</span>
          <h2 id="hero-cta-heading">Find The Right Course For You</h2>
          <p>
            Explore courses, discover new skills and find the right learning path for your goals.
          </p>
          <Link href="/dashboard/explore" className={s.primaryBtn}>
            Explore Courses
          </Link>
        </div>
        <div className={s.heroBannerImage}>
          <Image
            src="/images/Learning/Find your way to learn..png"
            alt="Student exploring a new way to learn"
            fill
            sizes="(max-width: 680px) 100vw, 320px"
          />
        </div>
      </section>

      {selectedCourses.length > 0 && (
        <section aria-labelledby="selected-attendance-heading" style={{ marginBottom: 24 }}>
          <div className={s.sectionBar}>
            <h2 id="selected-attendance-heading" className={s.sectionHeading}>
              My Selected Courses
            </h2>
            <Link href="/dashboard/my-learning" className={s.inlineActionLink}>
              My Learning &rarr;
            </Link>
          </div>

          <div className={s.featuredGrid}>
            {selectedCourses.map(({ course, attendance }) => (
              <article key={course.id} className={s.moduleCard}>
                <div className={s.moduleCardHeader}>
                  <div>
                    <h3>{course.title}</h3>
                    <p className={s.courseMetaLine}>
                      {course.category} Program &middot; {course.modules.length} Modules
                    </p>
                  </div>
                  <span className={`${s.statusBadge} ${s.badgeOrange}`}>
                    {attendance.attended} / {attendance.totalClasses} Classes
                  </span>
                </div>

                <div>
                  <div className={s.progressHeader}>
                    <span>Classes Attended</span>
                    <strong>
                      {attendance.attended} / {attendance.totalClasses} ({attendance.percent}%)
                    </strong>
                  </div>
                  <div className={s.progressTrack}>
                    <div className={s.progressFill} style={{ width: `${attendance.percent}%` }} />
                  </div>
                </div>

                <Link href={`/dashboard/courses/${course.id}`} className={s.inlineActionLink}>
                  About Course &amp; Attendance &rarr;
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      <section aria-labelledby="featured-courses-heading">
        <div className={s.sectionBar}>
          <h2 id="featured-courses-heading" className={s.sectionHeading}>
            Explore Courses
          </h2>
          <Link href="/dashboard/explore" className={s.inlineActionLink}>
            View All &rarr;
          </Link>
        </div>

        <div className={s.featuredGrid}>
          {featuredCourses.map((course) => (
            <article key={course.id} className={s.previewCard}>
              <div className={s.cardBannerWrap}>
                <Image
                  src={course.banner}
                  alt={course.title}
                  fill
                  priority
                  sizes="(max-width: 680px) 100vw, 480px"
                  className={s.cardBannerImg}
                />
              </div>
              <div className={s.previewCardBody}>
                <h3>{course.title}</h3>
                <p className={s.courseMetaLine}>
                  {course.shortCategory} | {course.level}
                </p>
                <Link href={`/dashboard/courses/${course.id}`} className={s.inlineActionLink}>
                  About Course &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="getting-started-heading">
        <h2 id="getting-started-heading" className={s.sectionHeading}>
          Getting Started
        </h2>
        <p className={s.stepsSubtitle}>
          Three simple steps to get familiar with your student portal.
        </p>

        <div className={s.stepsCard}>
          {onboardingSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className={s.stepRow}>
                <span className={s.stepIconBox}>
                  <Icon />
                </span>
                <div className={s.stepContent}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <Link href={step.href} className={s.inlineActionLink}>
                    {step.cta} &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
