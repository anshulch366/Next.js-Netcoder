import type { Metadata } from "next";
import CertificatesView from "@/components/lms/CertificatesView";

export const metadata: Metadata = {
  title: "Certificates | Netcoder Technology LMS",
  description: "Preview and print earned Netcoder Technology LMS completion certificates.",
  robots: { index: false, follow: true },
};

export default function CertificatesPage() {
  return <CertificatesView />;
}
