"use client";

import { useState } from "react";
import { PageLink as Link } from "@/components/layout/PageTransition";
import { courses } from "@/data/courses";
import { lessons, lessonsFor } from "@/data/lessons";
import { resources } from "@/data/resources";
import ResourceCard from "@/components/cards/ResourceCard";
import CourseProgress, { ResumeCourse, useCompletedCount } from "@/components/courses/CourseProgress";
import SearchInput from "@/components/ui/SearchInput";
import SubjectLogo from "@/components/courses/SubjectLogo";
import library from "@/components/resources/ResourceStudio.module.css";
import styles from "./netcoder.module.css";

export function Resources() {
  const [query, setQuery] = useState("");
  const matches = courses.filter((course) => [course.language, ...resources[course.slug].map((item) => item.title + " " + item.description)].join(" ").toLowerCase().includes(query.trim().toLowerCase()));
  return <section><div className="intro"><div className="eyebrow">Reference shelf</div><h1>Resource library</h1>
    <p>Official documentation, language references, and practice tools for each course.</p></div>
    <div className="toolbar"><SearchInput label="Search resources" value={query} onChange={setQuery} /><span aria-live="polite">{matches.length} of {courses.length} guides</span></div>
    <div className="grid">{matches.map((course) => <ResourceCard key={course.slug} course={course} />)}</div>
    {matches.length === 0 && <p>No matching resources. <button className="text-link" onClick={() => setQuery("")}>Clear search</button></p>}
  </section>;
}

export function Dashboard() {
  const count = useCompletedCount(lessons);
  const percent = lessons.length ? Math.round(100 * count / lessons.length) : 0;

  return (
    <div className={library.studio}>
      <section className={styles.hero}>
        <div>
          <h1>My <span>dashboard.</span></h1>
          <p>Pick up your next lesson or revisit a guided project. Your progress is saved in this browser.</p>
          <Link className={styles.primary} href="/courses">Browse courses</Link>
        </div>
        <div className={styles.overview}>
          <div className={styles.ring} style={{ backgroundImage: `conic-gradient(var(--orange) ${percent}%, #f0d8cd 0)` }} aria-hidden="true">
            <strong>{percent}%</strong>
          </div>
          <div>
            <h2>Overall progress</h2>
            <p><strong>{count} of {lessons.length}</strong> lessons complete</p>
            <small>Across {courses.length} guided projects</small>
          </div>
        </div>
      </section>
      <section aria-labelledby="project-heading">
        <h2 id="project-heading" className={styles.sectionTitle}>My guided projects</h2>
        <div className={styles.projects}>
          {courses.map((course) => {
            const syllabus = lessonsFor(course.slug);
            const minutes = syllabus.reduce((total, lesson) => total + lesson.minutes, 0);
            return (
              <article key={course.slug} className={styles.project}>
                <div className={styles.subject}><SubjectLogo subject={course.slug} /><span>{course.language}</span><small>{minutes} min</small></div>
                <h3><Link href={`/courses/${course.slug}`}>{course.title}</Link></h3>
                <p>{course.description}</p>
                <div className={styles.learning}>
                  <CourseProgress lessons={syllabus} />
                  <ResumeCourse lessons={syllabus} />
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}


