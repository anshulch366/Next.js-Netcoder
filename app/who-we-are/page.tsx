import Image from "next/image";
import { PageLink } from "@/components/layout/PageTransition";
import library from "@/components/resources/ResourceStudio.module.css";
import styles from "./about.module.css";

export const metadata = {
  title: "Who We Are",
  description: "Meet Netcoder Technology, a training institute and digital services team based in Dharamshala, Himachal Pradesh.",
};

export default function WhoWeArePage() {
  return (
    <div className={library.studio}>
      <section className={styles.hero} aria-labelledby="about-title">
        <div>
          <p className={styles.eyebrow}>Who we are</p>
          <h1 id="about-title">We are <span>Netcoder.</span></h1>
          <p className={styles.intro}>
            We teach the skills behind websites, brands and digital products.
            We also put those skills to work for businesses, right here in Dharamshala.
          </p>
          <dl className={styles.facts}>
            <div><dt>Founded</dt><dd>2016</dd></div>
            <div><dt>Founder</dt><dd>Nitin Kapoor</dd></div>
          </dl>
        </div>
        <div className={styles.art}>
          <Image src="/images/about/netcoder-creative.webp" alt="" width={800} height={987}
            sizes="(max-width: 720px) 66vw, 360px" loading="eager" />
        </div>
      </section>
      <section className={styles.work} aria-labelledby="work-title">
        <h2 id="work-title">What we do</h2>
        <div className={styles.paths}>
          <article>
            <h3>Practical learning</h3>
            <p>Learn to code, design or run digital campaigns through guided projects, on campus in Dharamshala or online across India.</p>
            <PageLink href="/learning">Explore learning programs <span aria-hidden="true">→</span></PageLink>
          </article>
          <article>
            <h3>Digital services</h3>
            <p>We work with founders and businesses to develop websites, design brand identities and reach customers through digital marketing.</p>
            <PageLink href="/services">Explore our services <span aria-hidden="true">→</span></PageLink>
          </article>
        </div>
      </section>
    </div>
  );
}
