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

const campusGroups = [
  { title: "Design & Multimedia Courses", links: campus.filter(item => ["Graphic Design", "UI/UX Design"].includes(item.title)) },
  { title: "CMS & Web Technologies Courses", links: campus.filter(item => ["Full-Stack Development", "Python Course"].includes(item.title)) },
  { title: "Professional Training Courses", links: campus.filter(item => ["Digital Marketing", "Data Science", "Ethical Hacking", "Cyber Security", "Data Analytics"].includes(item.title)) },
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
      <details name="program-menu" className={s.onlineMenu}>
        <summary>Online Courses</summary>
        <div className={s.dropdownPanel}>
          <h2>Online Professional Courses</h2>
          <div className={s.onlineLinks}>{online.map(item => <a href={item.href} key={item.href}>{item.title}</a>)}</div>
        </div>
      </details>
      <details name="program-menu" className={s.campusMenu}>
        <summary>On-Campus Courses</summary>
        <div className={s.dropdownPanel}>
          {campusGroups.map(group => <section className={s.courseGroup} key={group.title}>
            <h2>{group.title}</h2>
            {group.links.map(item => <a href={item.href} key={item.href}>{item.title}</a>)}
          </section>)}
        </div>
      </details>
    </nav>
  );
}
