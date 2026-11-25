import type { ReactNode } from "react";
import LmsShell from "@/components/lms/LmsShell";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <LmsShell>{children}</LmsShell>;
}
