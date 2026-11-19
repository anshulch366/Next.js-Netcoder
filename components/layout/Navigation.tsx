"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [["/", "Home"], ["/courses", "Courses"], ["/resources", "Resources"], ["/dashboard", "My dashboard"], ["/services", "Services"]];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menu = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function dismiss(event: PointerEvent | FocusEvent) {
      if (event.target instanceof Node && !menu.current?.contains(event.target)) setOpen(false);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    }
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("focusin", dismiss);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("focusin", dismiss);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);

  return (
    <div className="menu" ref={menu}>
      <button className="menu-trigger" ref={trigger} type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
      <nav id="site-navigation" hidden={!open} aria-label="Main navigation">
        {links.map(([href, label]) => (
          <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={pathname === href || pathname.startsWith(href + "/") ? "page" : undefined}>{label}</Link>
        ))}
      </nav>
    </div>
  );
}
