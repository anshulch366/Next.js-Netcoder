import type { ReactNode } from "react";
import Image from "next/image";
import Navigation from "@/components/layout/Navigation";
import { PageLink as Link } from "@/components/layout/PageTransition";
import SocialLinks from "@/components/layout/SocialLinks";
import LearningNav from "./LearningNav";
import { campus, contact, industrial } from "./programs";
import s from "./learning.module.css";

const footerGroups = [
  { name: "Resources", links: [["Who We Are", "/who-we-are"], ["Blogs", "/blogs"], ["Contact", contact]] },
  { name: "Explore", links: [["Online Courses", "/courses"], ["On-Campus Programs", "#career-domains"], ["Industrial Training", industrial]] },
  { name: "Support", links: [["Privacy Policy", "https://www.netcoder.in/privacy-policy"], ["Terms & Conditions", "mailto:info@netcoder.in?subject=Terms%20and%20conditions%20for%20enrolment"], ["FAQs", "#questions"]] },
];

function Logo() {
  return <Link href="/" aria-label="Netcoder Technology home"><Image src="/images/logo/logo.png" alt="" width={2534} height={1129} sizes="180px" /></Link>;
}

export default function LearningLayout({ children }: { children: ReactNode }) {
  return (
    <div className={s.canvas}>
      <header className={s.header}>
        <div className={s.logo}><Logo /></div>
        <LearningNav />
        <Navigation />
      </header>
      <main id="main" className={s.main}>{children}</main>
      <footer className={s.footer}>
        <div className={s.footerTop}>
          <div className={s.footerBrand}>
            <Logo /><strong>Learn. Create. Grow.</strong>
            <SocialLinks className={s.socials} linkClassName={s.socialLink} />
          </div>
          {footerGroups.map(group => <div key={group.name}><h3>{group.name}</h3>{group.links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>)}
        </div>
        <div className={s.footerRow}>
          <h3>Popular Courses</h3>
          <ul>{campus.map(item => <li key={item.title}><a href={item.href}>{item.title}</a></li>)}</ul>
        </div>
        <div className={s.footerRow}>
          <h3>Get In Touch</h3>
          <address>
            <a href={contact}>⌖ &nbsp;1st Floor, Above Gramin Bank, Near Govt. ITI,<br />Dari, Dharamshala (176057)</a>
            <span>☏ &nbsp;<a href="tel:+919816732055">+91 9816732055</a>, <a href="tel:+917590832055">7590832055</a></span>
            <a href="mailto:info@netcoder.in">✉ &nbsp;info@netcoder.in</a>
          </address>
        </div>
        <div className={s.copyright}>© {new Date().getFullYear()} Netcoder Technology. All rights reserved.</div>
      </footer>
    </div>
  );
}
