import { PageLink as Link } from "@/components/layout/PageTransition";
import styles from "./home.module.css";

export const metadata = { title: "Welcome" };

const paths = [
  {
    title: "Want to Learn",
    description: "Build practical skills through industry-focused courses, hands-on projects, and real-world training.",
    items: ["Professional Courses", "Industrial Training", "Hands-On Projects", "Career-Focused Learning"],
    href: "/courses",
    action: "Explore Learning",
  },
  {
    title: "Want to Build",
    description: "Turn ideas into digital experiences with design, development, branding, and digital solutions.",
    items: ["Web Development", "UI/UX Design", "Branding", "Digital Marketing"],
    href: "/services",
    action: "Explore Services",
  },
];

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.intro} aria-labelledby="home-title">
        <span className={styles.welcome}>Welcome To Netcoder Technology</span>
        <h1 id="home-title">What Brings You <span>Here Today?</span></h1>
        <p>Choose Your Path And Discover What Netcoder Can Help You Learn Or Build.</p>
      </section>
      <div className={styles.choices}>
        {paths.map((path) => (
          <article className={styles.card} key={path.href}>
            <h2>{path.title}</h2>
            <p className={styles.description}>{path.description}</p>
            <div className={styles.features}>
              <h3>What You’ll Find:</h3>
              <ul>{path.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <button type="button" className={styles.detailsButton} popoverTarget={`details-${path.href.slice(1)}`}>What you’ll find</button>
            <div popover="auto" id={`details-${path.href.slice(1)}`} className={styles.popover} aria-label={path.title} role="dialog">
              <h2>{path.title}</h2>
              <p>{path.description}</p>
              <ul>{path.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <button type="button" popoverTarget={`details-${path.href.slice(1)}`} popoverTargetAction="hide">Close</button>
            </div>
            <Link className={styles.action} href={path.href}>{path.action}</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
