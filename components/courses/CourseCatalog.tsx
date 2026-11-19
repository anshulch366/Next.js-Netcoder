"use client";

import { PageLink as Link } from "@/components/layout/PageTransition";
import { useState } from "react";
import SubjectLogo from "./SubjectLogo";
import styles from "@/app/courses/catalog.module.css";

type Subject = {
  id: string;
  label: string;
  category: string;
  description: string;
  topics: string[];
  project?: string;
};

export default function CourseCatalog({ subjects }: { subjects: Subject[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const categories = [...new Set(subjects.map((subject) => subject.category))].sort();
  const search = query.trim().toLowerCase();
  const matches = subjects.filter((subject) =>
    (!category || subject.category === category) &&
    [subject.label, subject.category, subject.description, subject.project, ...subject.topics]
      .some((value) => value?.toLowerCase().includes(search)),
  );

  function clearFilters() {
    setQuery("");
    setCategory("");
  }

  return (
    <section aria-labelledby="subjects-heading">
      <div className={styles.toolbar}>
        <h2 id="subjects-heading">Browse subjects</h2>
        <div className={styles.filters}>
          <input type="search" aria-label="Search courses or topics" placeholder="Search courses or topics" value={query} onChange={(event) => setQuery(event.target.value)} />
          <select aria-label="Filter courses by category" value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="">All categories</option>
            {categories.map((name) => <option key={name}>{name}</option>)}
          </select>
        </div>
      </div>
      <p className={styles.count} role="status">{matches.length} of {subjects.length} subjects</p>
      <div className={styles.grid}>
        {matches.map((subject) => (
          <article className={styles.card} key={subject.id}>
            <div className={styles.meta}><span>{subject.category}</span><span>{subject.topics.length} lessons</span></div>
            <h3 className={styles.subjectHeading}><SubjectLogo subject={subject.id} />{subject.label}</h3>
            <p>{subject.description}</p>
            <ul className={styles.topics}>
              {subject.topics.slice(0, 3).map((topic) => <li key={topic}>{topic}</li>)}
            </ul>
            <div className={styles.actions}>
              <Link className={styles.start} href={{ pathname: "/resources", query: { subject: subject.id } }} aria-label={`Start ${subject.label} course`}>Start course</Link>
              {subject.project && <Link className={styles.libraryLink} href={`/courses/${subject.id}`} aria-label={`Guided project: ${subject.project}`}>Guided project</Link>}
            </div>
          </article>
        ))}
      </div>
      {matches.length === 0 && <div className={styles.empty}><h3>No courses match your filters</h3><button type="button" className={styles.start} onClick={clearFilters}>Clear filters</button></div>}
    </section>
  );
}
