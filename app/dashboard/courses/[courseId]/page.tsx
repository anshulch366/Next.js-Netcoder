import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseDetailView from "@/components/lms/CourseDetailView";
import { lmsCourses } from "@/data/lms-courses";

export function generateStaticParams() {
  return lmsCourses.map((course) => ({ courseId: course.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ courseId: string }>;
}): Promise<Metadata> {
  const { courseId } = await params;
  const course = lmsCourses.find((item) => item.id === courseId);
  if (!course) notFound();
  return {
    title: `${course.title} | Netcoder Technology LMS`,
    description: course.subtitle,
    robots: { index: false, follow: true },
  };
}

export default async function DashboardCoursePage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const course = lmsCourses.find((item) => item.id === courseId);
  if (!course) notFound();
  return <CourseDetailView course={course} />;
}
