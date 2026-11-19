import { notFound } from "next/navigation";
import Link from "next/link";
import { courses } from "@/data/courses";
import { lessonsFor } from "@/data/lessons";
import CourseProgress from "@/components/courses/CourseProgress";
import LessonList from "@/components/courses/LessonList";

export function generateStaticParams() {
  return courses.map((course) => ({ courseSlug: course.slug }));
}

export default async function CoursePage({ params }: { params: Promise<{ courseSlug: string }> }) {
  const { courseSlug } = await params;
  const course = courses.find((item) => item.slug === courseSlug);
  if (!course) notFound();
  const lessons = lessonsFor(course.slug);
  return <section className="reading"><Link className="text-link" href="/courses">Course catalog</Link>
    <div className="intro"><span className={`tab ${course.slug}`}>{course.language}</span><h1>{course.title}</h1><p>{course.description}</p></div>
    <CourseProgress lessons={lessons} /><h2>Course lessons</h2><LessonList lessons={lessons} />
    <Link className="text-link" href={`/resources/${course.slug}`}>Open the {course.language} field guide</Link>
  </section>;
}
