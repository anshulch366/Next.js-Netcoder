import type { Metadata } from "next";
import ExploreCoursesView from "@/components/lms/ExploreCoursesView";

export const metadata: Metadata = {
  title: "Explore Courses | Netcoder Technology LMS",
  description: "Browse Netcoder Technology programs and filter courses by category.",
  robots: { index: false, follow: true },
};

export default function ExploreCoursesPage() {
  return <ExploreCoursesView />;
}
