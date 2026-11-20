"use client";

import { useEffect, useRef } from "react";
import { campus, industrial } from "./programs";
import s from "./learning.module.css";

const online = [
  { title: "All online courses", href: "/courses" },
  { title: "Python", href: "/courses/python" },
  { title: "JavaScript", href: "/courses/javascript" },
  { title: "SQL", href: "/courses/sql" },
];

export default function LearningNav() {
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    function dismiss(event: PointerEvent | FocusEvent) {
      if (event.target instanceof Node && !nav.current?.contains(event.target)) {
        nav.current?.querySelector("details[open]")?.removeAttribute("open");
      }
    }
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("focusin", dismiss);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("focusin", dismiss);
    };
  }, []);

  return (
    <nav ref={nav} className={s.courseNav} aria-label="Learning programs" onKeyDown={(event) => {
      if (event.key === "Escape") {
        const active = nav.current?.querySelector<HTMLDetailsElement>("details[open]");
        if (active) { active.open = false; active.querySelector("summary")?.focus(); }
      }
    }}>
      <a href={industrial}>Industrial Training</a>
      {[{ title: "Online Courses", links: online }, { title: "On-Campus Courses", links: campus.filter(item => !item.href.startsWith("/")) }].map(group => (
        <details name="program-menu" key={group.title}>
          <summary>{group.title}</summary>
          <div>{group.links.map(item => <a href={item.href} key={item.href}>{item.title}</a>)}</div>
        </details>
      ))}
    </nav>
  );
}
