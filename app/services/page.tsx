import { PageLink as Link } from "@/components/layout/PageTransition";

import Image from "next/image";
import library from "@/components/resources/ResourceStudio.module.css";
import styles from "../netcoder.module.css";

import { pageMetadata } from "@/app/site-metadata";

export const metadata = pageMetadata(
  "/services",
  "Web Development, UI/UX Design, Branding and Marketing",
  "Explore Netcoder’s website development, UI/UX design, brand identity and digital marketing services, from prototypes and online stores to campaign reporting.",
);

const services = [
  { title: "Web Development", description: "Plan and build a responsive website, from its first page to the features your visitors use every day.", deliverables: ["Custom websites", "CMS integration", "Online stores"] },
  { title: "UI/UX Design", description: "Map the steps people take through your product and explore layouts with wireframes and interactive prototypes.", deliverables: ["User research", "Prototypes", "Usability testing"] },
  { title: "Branding", description: "Define a visual identity with a logo, typography, color palette, and guidelines for using them together.", deliverables: ["Logo design", "Visual identity", "Brand guidelines"] },
  { title: "Digital Marketing", description: "Plan content around your audience, choose channels, and measure how campaigns perform.", deliverables: ["Search optimization", "Social campaigns", "Reporting"] },
];

export default function Services() {
  return (
    <div className={library.studio}>
      <section className={styles.hero}>
        <div>
          <h1>Digital <span>services.</span></h1>
          <p>Launch a website, shape your visual identity, or reach new customers with Netcoder’s design, development, and marketing team.</p>
          <div className={styles.heroActions}>
            <a className={styles.primary} href="https://netcoder.in/contact">Discuss your project</a>
            <Link className={styles.back} href="/">Back to paths</Link>
          </div>
        </div>
        <div className={styles.illustration}>
          <Image src="/images/services/digital-solutions.webp" alt="" width={920} height={645} sizes="(max-width: 720px) 90vw, 480px" />
        </div>
      </section>
      <section aria-labelledby="services-heading">
        <h2 className={styles.sectionTitle} id="services-heading">How we can help</h2>
        <div className={styles.services}>
          {services.map(({ title, description, deliverables }) => (
            <article className={styles.service} key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul aria-label={`${title} deliverables`}>
                {deliverables.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
