import SocialLinks from "./SocialLinks";
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
          <SocialLinks className={styles.socials} linkClassName={styles.socialLink} />
        </div>
      </div>
    </footer>
  );
}

