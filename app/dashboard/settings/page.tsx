import type { Metadata } from "next";
import SettingsView from "@/components/lms/SettingsView";

export const metadata: Metadata = {
  title: "Settings | Netcoder Technology LMS",
  description: "Configure notifications, weekly study goals, and account password.",
  robots: { index: false, follow: true },
};

export default function SettingsPage() {
  return <SettingsView />;
}
