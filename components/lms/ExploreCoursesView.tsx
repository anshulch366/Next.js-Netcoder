"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { BookIcon, ClockIcon, SearchIcon } from "@/components/lms/Icons";
import {
  getCourseTotalClasses,
  lmsCourses,
  type CourseCategory,
} from "@/data/lms-courses";
import { enrollInCourse, unenrollCourse, useLmsSession } from "@/lib/lms-store";
import s from "./lms.module.css";

const CATEGORIES: CourseCategory[] = [
  "Design",
  "Web Development",
  "Digital Marketing",
  "Multimedia",
  "Programming",
];

const PAGE_SIZE = 6;

type SortMode = "recommended" | "classes" | "duration-asc" | "free-first" | "title";

function toggleSelection<T>(items: T[], item: T): T[] {
  return items.includes(item) ? items.filter((entry) => entry !== item) : [...items, item];
}

export default function ExploreCoursesView() {
  const session = useLmsSession();

  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortMode>("recommended");
  const [categories, setCategories] = useState<CourseCategory[]>([]);
  const [page, setPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeFilterCount = categories.length;

  const filteredCourses = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = lmsCourses.filter((course) => {
      if (categories.length > 0 && !categories.includes(course.category)) return false;
      if (q) {
        const haystack = `${course.title} ${course.subtitle} ${course.category} ${course.level} ${course.skills.join(" ")}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });

    return [...list].sort((a, b) => {
      switch (sortBy) {
        case "classes":
          return getCourseTotalClasses(b) - getCourseTotalClasses(a);
        case "duration-asc":
          return a.durationHours - b.durationHours;
        case "free-first":
          if (a.priceType !== b.priceType) return a.priceType === "Free" ? -1 : 1;
          return a.recommendedRank - b.recommendedRank;
        case "title":
          return a.title.localeCompare(b.title);
        default:
          return a.recommendedRank - b.recommendedRank;
      }
    });
  }, [query, sortBy, categories]);

  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const visibleCourses = filteredCourses.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  function clearFilters() {
    setCategories([]);
    setQuery("");
    setPage(1);
  }

  return (
    <div>
      <div className={s.breadcrumbBar}>Dashboard / Explore Courses</div>

      <div className={s.pageHeader}>
        <div>
          <h1 className={s.pageTitle}>Explore Courses</h1>
          <p className={s.pageSubtitle}>Select programs to add them to your LMS workspace.</p>
        </div>
      </div>

      <label className={s.searchBar} aria-label="Search courses">
        <SearchIcon />
        <input
          type="search"
          placeholder="Search courses"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
        />
      </label>

      <div className={s.mobileFilterBar}>
        <button
          type="button"
          className={s.secondaryBtn}
          aria-expanded={mobileFiltersOpen}
          onClick={() => setMobileFiltersOpen((prev) => !prev)}
        >
          Filters{activeFilterCount > 0 ? ` (${activeFilterCount})` : ""}
        </button>

        <div className={s.mobileCategoryChips}>
          <button
            type="button"
            className={`${s.pillTab} ${categories.length === 0 ? s.pillTabActive : ""}`}
            onClick={() => {
              setCategories([]);
              setPage(1);
            }}
          >
            All
          </button>
          {CATEGORIES.map((cat) => {
            const active = categories.includes(cat);
            return (
              <button
                key={cat}
                type="button"
                className={`${s.pillTab} ${active ? s.pillTabActive : ""}`}
                onClick={() => {
                  setCategories((prev) => toggleSelection(prev, cat));
                  setPage(1);
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <div className={s.sectionBar}>
        <h2 className={s.sectionHeading}>Popular Courses</h2>
        <select
          aria-label="Sort courses"
          className={s.sortSelect}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortMode)}
        >
          <option value="recommended">sort by: Recommended</option>
          <option value="classes">sort by: Most Classes</option>
          <option value="duration-asc">sort by: Shortest Duration</option>
          <option value="free-first">sort by: Free First</option>
          <option value="title">sort by: Title A-Z</option>
        </select>
      </div>

      <div className={s.exploreLayout}>
        <aside
          className={`${s.filterPanel} ${mobileFiltersOpen ? s.filterPanelMobileOpen : ""}`}
          aria-label="Course filters"
        >
          <div className={s.filterHeader}>
            <strong>Filters</strong>
            <button type="button" className={s.inlineActionLink} onClick={clearFilters}>
              Clear
            </button>
          </div>

          <div className={s.filterGroup}>
            <h3>Category</h3>
            {CATEGORIES.map((category) => (
              <label key={category} className={s.filterOption}>
                <input
                  type="checkbox"
                  checked={categories.includes(category)}
                  onChange={() => {
                    setCategories((prev) => toggleSelection(prev, category));
                    setPage(1);
                  }}
                />
                <span>{category}</span>
              </label>
            ))}
          </div>

        </aside>

        <div>
          {visibleCourses.length === 0 ? (
            <div className={s.emptyState}>
              <h3>No courses match your filters</h3>
              <p className={s.pageSubtitle}>Try clearing a filter or searching another skill.</p>
              <button type="button" className={s.primaryBtn} onClick={clearFilters}>
                Reset Filters
              </button>
            </div>
          ) : (
            <div className={s.exploreGrid}>
              {visibleCourses.map((course) => {
                const isSelected = Boolean(session.account.enrolled[course.id]);
                const totalClasses = getCourseTotalClasses(course);
                return (
                  <article key={course.id} className={s.exploreCard}>
                    <div className={s.exploreBannerWrap}>
                      <Image
                        src={course.banner}
                        alt={course.title}
                        fill
                        sizes="(max-width: 680px) 100vw, 280px"
                        className={s.cardBannerImg}
                      />
                    </div>
                    <div>
                      <h3>{course.title}</h3>
                      <p className={s.courseMetaLine}>
                        {course.category} | {course.level} &middot; {course.priceLabel}
                      </p>
                    </div>
                    <div className={s.courseStatsRow}>
                      <span className={s.courseStatItem}>
                        <BookIcon />
                        {totalClasses} Classes
                      </span>
                      <span className={s.courseStatItem}>
                        <ClockIcon />
                        {course.durationLabel}
                      </span>
                    </div>
                    <div className={s.exploreCardActions}>
                      {isSelected ? (
                        <button
                          type="button"
                          className={s.enrolledBtn}
                          onClick={() => unenrollCourse(course.id)}
                          title="Click to remove from My Learning"
                        >
                          Selected &check;
                        </button>
                      ) : (
                        <button
                          type="button"
                          className={s.enrollBtn}
                          onClick={() => enrollInCourse(course.id)}
                        >
                          Select Course
                        </button>
                      )}
                      <Link href={`/dashboard/courses/${course.id}`} className={s.textActionMuted}>
                        About Course &rarr;
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {totalPages > 1 && (
            <nav className={s.paginationBar} aria-label="Course catalog pages">
              <button
                type="button"
                className={s.pageBtn}
                disabled={safePage === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                aria-label="Previous page"
              >
                &lsaquo;
              </button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  type="button"
                  className={`${s.pageBtn} ${pageNum === safePage ? s.pageBtnActive : ""}`}
                  aria-current={pageNum === safePage ? "page" : undefined}
                  onClick={() => setPage(pageNum)}
                >
                  {pageNum}
                </button>
              ))}
              <button
                type="button"
                className={s.pageBtn}
                disabled={safePage === totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                aria-label="Next page"
              >
                &rsaquo;
              </button>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}
