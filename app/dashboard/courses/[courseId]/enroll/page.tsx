import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseEnquiryView from "@/components/lms/CourseEnquiryView";
import { lmsCourses } from "@/data/lms-courses";

export function generateStaticParams() {
  return lmsCourses.map((course) => ({ courseId: course.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ courseId: string }> }): Promise<Metadata> {
  const { courseId } = await params;
  const course = lmsCourses.find((item) => item.id === courseId);
  if (!course) notFound();
  return {
    title: `${course.title} | Select a Course | Netcoder Technology`,
    description: `Explore the ${course.title} program at Netcoder Technology and add it to your learning dashboard.`,
    robots: { index: false, follow: true },
  };
}

export default async function EnrollPage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  const course = lmsCourses.find((item) => item.id === courseId);
  if (!course) notFound();
  return <CourseEnquiryView course={course} />;
}
