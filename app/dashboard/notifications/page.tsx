import type { Metadata } from "next";
import NotificationsView from "@/components/lms/NotificationsView";

export const metadata: Metadata = {
  title: "Notifications | Netcoder Technology LMS",
  description: "Review course announcements, schedule reminders, and assignment updates.",
  robots: { index: false, follow: true },
};

export default function NotificationsPage() {
  return <NotificationsView />;
}
