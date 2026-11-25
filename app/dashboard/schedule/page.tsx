import type { Metadata } from "next";
import ScheduleView from "@/components/lms/ScheduleView";

export const metadata: Metadata = {
  title: "Schedule | Netcoder Technology LMS",
  description: "View upcoming live studio sessions, campus labs, and mentor reviews.",
  robots: { index: false, follow: true },
};

export default function SchedulePage() {
  return <ScheduleView />;
}
