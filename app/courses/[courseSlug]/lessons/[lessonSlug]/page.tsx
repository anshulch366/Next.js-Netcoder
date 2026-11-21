import { PageLink as Link } from "@/components/layout/PageTransition";
import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import { lessons, lessonsFor } from "@/data/lessons";
import { CompletionButton } from "@/components/courses/CourseProgress";
import { pageMetadata } from "@/app/site-metadata";

export async function generateMetadata({ params }: PageProps<"/courses/[courseSlug]/lessons/[lessonSlug]">) {
  const { courseSlug, lessonSlug } = await params;
  const lesson = lessons.find(item => item.course === courseSlug && item.slug === lessonSlug);
  if (!lesson) notFound();
  const course = courses.find(item => item.slug === lesson.course)!;
  return pageMetadata(`/courses/${courseSlug}/lessons/${lessonSlug}`, `${lesson.title} · ${course.language}`, lesson.explanation);
}

export function generateStaticParams() {
  return lessons.map((lesson) => ({ courseSlug: lesson.course, lessonSlug: lesson.slug }));
}

export default async function LessonPage({ params }: { params: Promise<{ courseSlug: string; lessonSlug: string }> }) {
  const { courseSlug, lessonSlug } = await params;
  const course = courses.find((item) => item.slug === courseSlug);
  if (!course) notFound();
  const syllabus = lessonsFor(course.slug);
  const index = syllabus.findIndex((item) => item.slug === lessonSlug);
  if (index < 0) notFound();
  const lesson = syllabus[index];
  const next = syllabus[index + 1];
  return <article className="reading"><Link className="text-link" href={`/courses/${course.slug}`}>{course.title}</Link>
    <div className="intro"><div className="eyebrow">Lesson {index + 1} of {syllabus.length} · {lesson.minutes} min</div>
    <h1>{lesson.title}</h1><p>{lesson.explanation}</p></div>
    <pre><code>{lesson.code}</code></pre><p>{lesson.walkthrough}</p>
    <h2>Try it yourself</h2><p>{lesson.exercise}</p>
    <details><summary>Show a solution</summary><pre><code>{lesson.solution}</code></pre></details>
    <div className="actions"><CompletionButton lesson={lesson} />{next
      ? <Link className="text-link" href={`/courses/${course.slug}/lessons/${next.slug}`}>Next lesson · {next.title}</Link>
      : <Link className="text-link" href="/dashboard">View my progress</Link>}</div>
  </article>;
}
