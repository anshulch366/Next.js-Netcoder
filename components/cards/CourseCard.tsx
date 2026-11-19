import Link from "next/link";
import Image from "next/image";
import type { Course } from "@/types/course";
import { lessonsFor } from "@/data/lessons";

export default function CourseCard({ course }: { course: Course }) {
  const lessons = lessonsFor(course.slug);
  return <Link className="card" href={`/courses/${course.slug}`}>
    <Image className="cover" src={`/images/courses/${course.slug}.png`} alt="" width={720} height={280} />
    <div className="card-body"><div className="meta">{course.language} · Beginner</div>
      <h3>{course.title}</h3><p>{course.description}</p>
      <div className="card-meta">{lessons.length} lessons <span>·</span> {lessons.reduce((sum, lesson) => sum + lesson.minutes, 0)} min</div>
    </div>
  </Link>;
}
