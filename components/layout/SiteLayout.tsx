"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function SiteLayout({ header, footer, children }: { header: ReactNode; footer: ReactNode; children: ReactNode }) {
  const pathname = usePathname();
  if (
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/create-account" ||
    pathname === "/learning" ||
    pathname.startsWith("/dashboard")
  ) {
    return children;
  }
  return <>{header}<main id="main" className="wrap">{children}</main>{footer}</>;
}
