import type { Metadata } from "next";
import ExploreCoursesView from "@/components/lms/ExploreCoursesView";

export const metadata: Metadata = {
  title: "Explore Courses | Netcoder Technology LMS",
  description: "Browse Netcoder Technology programs by category, level, duration, and price.",
  robots: { index: false, follow: true },
};

export default function ExploreCoursesPage() {
  return <ExploreCoursesView />;
}
