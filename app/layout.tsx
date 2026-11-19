import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "@fontsource-variable/azeret-mono";
import "@fontsource-variable/outfit";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Netcoder Technology", template: "%s | Netcoder Technology" },
  description: "Explore coding courses, track your learning, and discover digital services at Netcoder Technology.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <div className="site-frame">
          <Header />
          <main id="main" className="wrap">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
