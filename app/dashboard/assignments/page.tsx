import type { Metadata } from "next";
import AssignmentsView from "@/components/lms/AssignmentsView";

export const metadata: Metadata = {
  title: "Assignments | Netcoder Technology LMS",
  description: "Track pending deliverables and submit coursework projects.",
  robots: { index: false, follow: true },
};

export default function AssignmentsPage() {
  return <AssignmentsView />;
}
