import { PageLink as Link } from "@/components/layout/PageTransition";
import styles from "./Footer.module.css";

const columns = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Courses", href: "/courses" },
      { label: "Resource Library", href: "/resources" },
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "https://www.netcoder.in/gallery" },
      { label: "Career", href: "https://www.netcoder.in/career" },
      { label: "Privacy & Policy", href: "https://www.netcoder.in/privacy-policy" },
    ],
  },
  {
    title: "Top Courses",
    links: [
      { label: "Full Stack Development", href: "https://www.netcoder.in/fullstack-web-development" },
      { label: "Graphics & Web Designing", href: "https://www.netcoder.in/graphic-and-web-designing" },
      { label: "MERN Stack", href: "https://www.netcoder.in/mern-stack" },
      { label: "MEAN Stack", href: "https://www.netcoder.in/mean-stack" },
      { label: "Python Course", href: "https://www.netcoder.in/software-engineering" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "Graphic Designing", href: "https://www.netcoder.in/foundation-graphic" },
      { label: "Animation", href: "https://www.netcoder.in/animation" },
      { label: "UI & UX Design", href: "https://www.netcoder.in/ui-ux" },
      { label: "Digital Marketing", href: "https://www.netcoder.in/digital-marketing" },
      { label: "Content Creation", href: "https://www.netcoder.in/digital-content-creator" },
    ],
  },
  {
    title: "Professional Training",
    links: [
      { label: "Data Science & Machine Learning", href: "https://www.netcoder.in/data-science-machine-learning" },
      { label: "Data Science & Business Analytics", href: "https://www.netcoder.in/business-analytics" },
      { label: "System Design & Operating Systems", href: "https://www.netcoder.in/system-design" },
      { label: "Cyber Security", href: "https://www.netcoder.in/cyber-security" },
      { label: "Ethical Hacking", href: "https://www.netcoder.in/ethical-hacking" },
    ],
  },
];

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/netcodertechnology/", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/netcodertechnology/", icon: "instagram" },
  { label: "YouTube", href: "https://www.youtube.com/@netcodertechnology", icon: "youtube" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>NETCODER TECHNOLOGY</p>
            <h2>Keep up with our latest updates</h2>
            <p>Stay connected with new courses, practical learning resources, and opportunities to build your digital career.</p>
          </div>
          <a className={styles.contactButton} href="https://www.netcoder.in/contact">
            Contact our team <span aria-hidden="true">↗</span>
          </a>
        </div>

        <nav className={styles.columns} aria-label="Footer links">
          {columns.map((column) => (
            <div className={styles.column} key={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((item) => (
                  <li key={item.label}>
                    {item.href.startsWith("/") ? (
                      <Link href={item.href}>{item.label}</Link>
                    ) : (
                      <a href={item.href}>{item.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className={styles.bottom}>
        <div className={`${styles.inner} ${styles.bottomInner}`}>
          <p className={styles.copyright}>
            Copyright © {new Date().getFullYear()} All rights reserved by <span className={styles.heart} aria-label="love">♥</span>{" "}
            <a href="https://www.netcoder.in/">Netcoder Technology</a>
          </p>
          <nav className={styles.socials} aria-label="Social media">
            {socials.map((social) => (
              <a className={styles.socialLink} href={social.href} key={social.icon} aria-label={social.label}>
                {social.icon === "facebook" && <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4Z" /></svg>}
                {social.icon === "instagram" && <svg className={styles.strokeIcon} viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.7" cy="6.6" r=".8" fill="currentColor" stroke="none" /></svg>}
                {social.icon === "youtube" && <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 7.1a3 3 0 0 0-2.1-2.2C19 4.4 12 4.4 12 4.4s-7 0-8.9.5A3 3 0 0 0 1 7.1 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.9 3 3 0 0 0 2.1 2.2c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.2 31 31 0 0 0 .5-4.9 31 31 0 0 0-.5-4.9ZM9.7 15.5v-7l6 3.5-6 3.5Z" /></svg>}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

