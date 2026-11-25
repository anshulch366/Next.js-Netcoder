import type { Metadata } from "next";
import ResourcesView from "@/components/lms/ResourcesView";

export const metadata: Metadata = {
  title: "Resources | Netcoder Technology LMS",
  description: "Browse coding language references, examples, and quizzes inside the LMS.",
  robots: { index: false, follow: true },
};

export default function DashboardResourcesPage() {
  return <ResourcesView />;
}
