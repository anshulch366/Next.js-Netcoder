"use client";

import { useState } from "react";
import Link from "next/link";
import { courses } from "@/data/courses";
import { lessons, lessonsFor } from "@/data/lessons";
import { resources } from "@/data/resources";
import CourseCard from "@/components/cards/CourseCard";
import ResourceCard from "@/components/cards/ResourceCard";
import CourseProgress, { ResumeCourse, useCompletedCount } from "@/components/courses/CourseProgress";
import SearchInput from "@/components/ui/SearchInput";

export function Courses() {
  const [query, setQuery] = useState("");
  const matches = courses.filter((course) => [course.title, course.language, course.description].join(" ").toLowerCase().includes(query.trim().toLowerCase()));
  return <section><div className="intro"><div className="eyebrow">Learning studio</div><h1>Course catalog</h1>
    <p>Choose a subject and work through its lessons at your own pace.</p></div>
    <div className="toolbar"><SearchInput label="Search courses" value={query} onChange={setQuery} /><span aria-live="polite">{matches.length} of {courses.length} courses</span></div>
    <div className="grid">{matches.map((course) => <CourseCard key={course.slug} course={course} />)}</div>
    {matches.length === 0 && <p>No matching courses. <button className="text-link" onClick={() => setQuery("")}>Clear search</button></p>}
  </section>;
}

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
  return <section><div className="intro"><div className="eyebrow">Your dashboard</div><h1>Learning journal</h1><p>Your completed lessons, saved in this browser.</p></div>
    <div className="summary"><strong>{count} / {lessons.length}</strong><span>lessons completed</span></div>
    <h2>Course progress</h2><div className="grid">{courses.map((course) =>
      <article className="resource-card" key={course.slug}><span className={`tab ${course.slug}`}>{course.language}</span><h3><Link href={`/courses/${course.slug}`}>{course.title}</Link></h3>
        <CourseProgress lessons={lessonsFor(course.slug)} /><ResumeCourse lessons={lessonsFor(course.slug)} />
      </article>)}</div>
  </section>;
}


