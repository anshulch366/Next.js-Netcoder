import type { Metadata } from "next";
import MyLearningView from "@/components/lms/MyLearningView";

export const metadata: Metadata = {
  title: "My Learning | Netcoder Technology LMS",
  description: "Manage your enrolled courses and track your lesson completion progress.",
  robots: { index: false, follow: true },
};

export default function MyLearningPage() {
  return <MyLearningView />;
}
