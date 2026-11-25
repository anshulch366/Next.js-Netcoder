import type { Metadata } from "next";
import DashboardHome from "@/components/lms/DashboardHome";

export const metadata: Metadata = {
  title: "Dashboard | Netcoder Technology LMS",
  description: "Your Netcoder student portal to explore courses, track learning, and stay updated.",
  robots: { index: false, follow: true },
};

export default function DashboardPage() {
  return <DashboardHome />;
}
