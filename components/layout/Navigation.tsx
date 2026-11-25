"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { PageLink as Link } from "./PageTransition";
import SocialLinks from "./SocialLinks";
import styles from "./Navigation.module.css";

const items = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Resources", href: "/resources" },
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Services", href: "/services" },
  { label: "LMS Login", href: "/login" },
];

export default function Navigation() {
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);

  function openMenu() {
    setExpanded(true);
    dialog.current?.showModal();
    if (dialog.current) dialog.current.scrollTop = 0;
    setOpen(true);
  }

  function closeMenu() {
    dialog.current?.close();
  }

  useEffect(() => {
    if (!open) return;
    window.addEventListener("popstate", closeMenu);
    return () => window.removeEventListener("popstate", closeMenu);
  }, [open]);

  return (
    <>
      <button className="menu-trigger" type="button" aria-label="Open navigation" aria-haspopup="dialog" aria-expanded={open} aria-controls="site-navigation" onClick={openMenu}>
        <span /><span /><span />
      </button>
      <dialog id="site-navigation" ref={dialog} className={styles.dialog} aria-label="Site menu" onClose={() => setOpen(false)}>
        <div className={styles.panels}>
          <button type="button" className={styles.close} aria-label="Close navigation" onClick={closeMenu} autoFocus>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
          </button>
          <div className={styles.primary}>
            <Link href="/" onClick={closeMenu} className={styles.brand} aria-label="Netcoder Technology home">
              <Image src="/images/logo/logo.png" alt="" width={2534} height={1129} sizes="(max-width: 700px) 120px, 220px" />
            </Link>
            <nav className={styles.links} aria-label="Main navigation">
              {items.map(({ label, href }) => href === "/resources" ? (
                <div key={href}>
                  <button className={styles.disclosure} type="button" aria-expanded={expanded} aria-controls="resource-links" onClick={() => setExpanded(!expanded)}>
                    {label}<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m3 6 5 5 5-5" /></svg>
                  </button>
                  <div id="resource-links" className={styles.submenu} hidden={!expanded}>
                    <Link href="/resources" onClick={closeMenu} aria-current={pathname === "/resources" ? "page" : undefined}>Resource Library</Link>
                    <Link href="/blogs" onClick={closeMenu} aria-current={pathname === "/blogs" ? "page" : undefined}>Blogs</Link>
                  </div>
                </div>
              ) : (
                <Link key={href} href={href} onClick={closeMenu} aria-current={pathname === href ? "page" : undefined}>{label}</Link>
              ))}
            </nav>
          </div>
          <aside className={styles.secondary} aria-label="Contact Netcoder Technology">
            <address className={styles.contacts}>
              <div className={styles.contact}>
                <span className={styles.icon}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg></span>
                <div><h2>Office</h2><a href="https://www.netcoder.in/contact">Dharamshala, Himachal Pradesh</a><small>Near Govt. I.T.I., Above Gramin Bank Dari,<br />Dharamshala (176057)</small></div>
              </div>
              <div className={styles.contact}>
                <span className={styles.icon}><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M10 18h4" /></svg></span>
                <div><h2>Phone</h2><a href="tel:+919816732055">+91 9816732055</a>, <a href="tel:+917590832055">7590832055</a><small>Mon to Sat, 10 am to 5 pm</small></div>
              </div>
              <div className={styles.contact}>
                <span className={styles.icon}><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m3 6 9 7 9-7" /></svg></span>
                <div><h2>Chat To Us</h2><a href="mailto:info@netcoder.in">info@netcoder.in</a><small>Send us your query anytime!</small></div>
              </div>
            </address>
            <SocialLinks className={styles.socials} linkClassName={styles.socialLink} />
          </aside>
        </div>
      </dialog>
    </>
  );
}
