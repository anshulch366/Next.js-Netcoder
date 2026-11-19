import Link from "next/link";
import type { Course } from "@/types/course";
import { resources } from "@/data/resources";

export default function ResourceCard({ course }: { course: Course }) {
  return <Link className="resource-card" href={`/resources/${course.slug}`}>
    <span className={`tab ${course.slug}`}>{course.language}</span>
    <h3>{course.language} field guide</h3><p>{resources[course.slug].map((item) => item.title).join(" and ")}</p>
  </Link>;
}
