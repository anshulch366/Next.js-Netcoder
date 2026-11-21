import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteOrigin } from "./site-metadata";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SiteLayout from "@/components/layout/SiteLayout";
import { PageTransition } from "@/components/layout/PageTransition";
import "@fontsource-variable/azeret-mono";
import "@fontsource-variable/outfit";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteOrigin,
  title: { default: "Netcoder Technology", template: "%s | Netcoder Technology" },
  description: "Explore coding courses, track your learning, and discover digital services at Netcoder Technology.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <PageTransition>
          <SiteLayout header={<Header />} footer={<Footer />}>{children}</SiteLayout>
        </PageTransition>
      </body>
    </html>
  );
}
