import type { Metadata } from "next";
import ProfileView from "@/components/lms/ProfileView";

export const metadata: Metadata = {
  title: "My Profile | Netcoder Technology LMS",
  description: "Manage your student profile, educational background, contact details, and learning overview.",
  robots: { index: false, follow: true },
};

export default function ProfilePage() {
  return <ProfileView />;
}
