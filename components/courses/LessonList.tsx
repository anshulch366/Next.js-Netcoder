import { PageLink as Link } from "@/components/layout/PageTransition";
import type { Lesson } from "@/types/lesson";

export default function LessonList({ lessons }: { lessons: Lesson[] }) {
  return <ol className="lesson-list">{lessons.map((lesson, index) =>
    <li key={lesson.slug}><Link href={`/courses/${lesson.course}/lessons/${lesson.slug}`}>
      <span className="number">{String(index + 1).padStart(2, "0")}</span>
      <strong>{lesson.title}</strong><span>{lesson.minutes} min</span>
    </Link></li>
  )}</ol>;
}
