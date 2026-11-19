import { PageLink as Link } from "@/components/layout/PageTransition";
import type { ReactNode } from "react";

export default function Button({ href, children }: { href: string; children: ReactNode }) {
  return <Link className="button" href={href}>{children}</Link>;
}
