import { PageLink as Link } from "@/components/layout/PageTransition";
import { learningLanguages } from "@/data/learning-resources";
import { courses } from "@/data/courses";
import CourseCatalog from "@/components/courses/CourseCatalog";
import SubjectLogo from "@/components/courses/SubjectLogo";
import library from "@/components/resources/ResourceStudio.module.css";
import styles from "./catalog.module.css";

import { pageMetadata } from "@/app/site-metadata";

export const metadata = pageMetadata(
  "/courses",
  "Coding Course Catalog and Practice Lessons",
  "Find HTML and CSS tutorials, guided Python, JavaScript and SQL projects, worked examples and quizzes. Search by subject or topic to start a lesson.",
);

export default function CoursesPage() {
  const subjects = learningLanguages.map(({ id, label, category, description, lessons }) => ({
    id, label, category, description,
    topics: lessons.map((lesson) => lesson.title),
    project: courses.find((course) => course.slug === id)?.title,
  }));
  const first = learningLanguages[0];
  const firstLesson = first.lessons[0];
  const lessonCount = subjects.reduce((sum, subject) => sum + subject.topics.length, 0);

  return (
    <div className={library.studio}>
      <div className={library.kickerRow}>
        <Link className={styles.libraryLink} href="/resources">Resource library</Link>
      </div>
      <section className={styles.hero}>
        <div>
          <h1>Explore the <span>courses.</span></h1>
          <p>Choose from {subjects.length} subjects and {lessonCount} lessons. Practice each topic with examples and quizzes from the Netcoder learning library.</p>
        </div>
        <Link className={styles.feature} href={{ pathname: "/resources", query: { subject: first.id } }}>
          <span className={styles.featureLabel}><SubjectLogo subject={first.id} />First lesson in {first.label}</span>
          <strong>{firstLesson.title}</strong>
          <code>{firstLesson.example.split("\n")[0]}</code>
          <span className={styles.featureAction}>Open lesson</span>
        </Link>
      </section>
      <CourseCatalog subjects={subjects} />
    </div>
  );
}
