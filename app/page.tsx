import Image from "next/image";
import Navigation from "@/components/layout/Navigation";
import { PageLink as Link } from "@/components/layout/PageTransition";
import { pageMetadata } from "@/app/site-metadata";
import s from "./home.module.css";
export const metadata = pageMetadata("/", "Learn, Create & Build | Netcoder Technology", "Explore professional digital services and practical learning at Netcoder Technology, Dharamshala.");
const paths = [
  { label: "FOR LEARNERS & PROFESSIONALS", title: <>Build skills.<br />Find your direction.</>, text: "Learn by doing. Explore professional courses, work on practical projects and take your next step with guidance.", tags: ["Professional courses", "Industrial training", "Hands-on projects"], href: "/learning", action: "Explore Learning", icon: "Aa" },
  { label: "FOR BUSINESSES & BRANDS", title: <>Bring your<br />next idea to life.</>, text: "Thoughtful design and dependable development for your next website, brand or digital experience.", tags: ["Web development", "UI/UX design", "Branding", "Digital marketing"], href: "/services", action: "Explore Services", icon: "</>" },
];
export default function Home() { return <div className={s.home}>
  <header className={s.header}>
    <Link href="/" aria-label="Netcoder Technology home"><Image src="/images/logo/logo.png" alt="Netcoder Technology" width={154} height={62} /></Link>
    <div className={s.headerActions}><Navigation /></div>
  </header>
  <main id="main" className={s.main}>
    <section className={s.hero}><div><p className={s.eyebrow}>NETCODER TECHNOLOGY · DHARAMSHALA</p><h1>Good ideas.<br />Great skills.<br /><span>Real possibilities.</span></h1></div><div className={s.intro}><span className={s.symbol} aria-hidden="true">✳</span><p>For the business you’re building.<br />For the future you’re working towards.</p><p className={s.muted}>We bring design, technology and practical learning together. Choose where you want to begin.</p></div></section>
    <section className={s.paths} aria-label="Explore Netcoder">{paths.map((path, index) => <article className={`${s.path} ${index === 0 ? s.services : s.learning}`} key={path.href}><div className={s.pathTop}><span>{path.label}</span><span className={s.icon} aria-hidden="true">{path.icon}</span></div><h2>{path.title}</h2><p>{path.text}</p><ul>{path.tags.map(tag => <li key={tag}>{tag}</li>)}</ul><Link className={s.action} href={path.href}>{path.action}</Link></article>)}</section>
    <section className={s.approach}><p className={s.eyebrow}>THE NETCODER APPROACH</p><h2>Built around people.<br />Focused on the work.</h2><div><h3>Ideas into practice</h3><p>From a first lesson to a finished website, we believe the best way forward is to make something useful.</p></div><div><h3>Clarity at every step</h3><p>A learning path that makes sense. A digital solution with a purpose. Start with what matters to you.</p></div></section>
  </main><footer className={s.footer}><strong>Netcoder Technology</strong><span>Technology. Creativity. Possibility.</span><Link href="/who-we-are">Get to know us</Link></footer>
</div>; }
