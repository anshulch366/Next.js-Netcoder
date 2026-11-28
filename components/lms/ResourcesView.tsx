"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { BookIcon, SearchIcon } from "@/components/lms/Icons";
import { learningLanguages } from "@/data/learning-resources";
import s from "./lms.module.css";

export default function ResourcesView() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(learningLanguages.map((lang) => lang.category)))],
    [],
  );

  const visibleSubjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    return learningLanguages.filter((subject) => {
      if (selectedCategory !== "All" && subject.category !== selectedCategory) return false;
      if (q) {
        const text = `${subject.label} ${subject.category} ${subject.description} ${subject.lessons.map((l) => l.title).join(" ")}`.toLowerCase();
        if (!text.includes(q)) return false;
      }
      return true;
    });
  }, [query, selectedCategory]);

  return (
    <div className={s.pageWidth}>
      <div className={s.breadcrumbBar}>Dashboard / Resources</div>

      <div className={s.pageHeader}>
        <div>
          <h1 className={s.pageTitle}>Learning Resources</h1>
          <p className={s.pageSubtitle}>
            Interactive language guides, syntax references, and practice quizzes.
          </p>
        </div>
        <Link href="/resources" className={s.secondaryBtn}>
          Open Full Studio &rarr;
        </Link>
      </div>

      <label className={s.searchBar} aria-label="Search resources">
        <SearchIcon />
        <input
          type="search"
          placeholder="Search topics, languages, or guides"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>

      <div className={s.pillTabsRow}>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`${s.pillTab} ${selectedCategory === cat ? s.pillTabActive : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={s.exploreGrid}>
        {visibleSubjects.map((subject) => (
          <article key={subject.id} className={s.moduleCard}>
            <div className={s.moduleCardHeader}>
              <div className={s.resourceLanguageTitle}>
                <Image
                  src={`/images/subjects/${subject.id}.svg`}
                  alt=""
                  width={32}
                  height={32}
                  className={s.resourceLanguageLogo}
                />
                <h3>{subject.label}</h3>
              </div>
              <span className={`${s.statusBadge} ${s.badgeOrange}`}>{subject.category}</span>
            </div>
            <p style={{ margin: 0, fontSize: "0.84rem" }}>{subject.description}</p>
            <div className={s.courseStatsRow}>
              <span className={s.courseStatItem}>
                <BookIcon />
                {subject.lessons.length} Topics
              </span>
            </div>
            <div className={s.exploreCardActions} style={{ marginTop: "auto", paddingTop: 6 }}>
              <Link href={`/resources?subject=${subject.id}`} className={s.enrollBtn} style={{ display: "inline-flex", alignItems: "center" }}>
                Open Guide
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
