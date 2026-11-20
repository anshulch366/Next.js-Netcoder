import Image from "next/image";
import { PageLink as Link } from "@/components/layout/PageTransition";
import CareerDomains from "./CareerDomains";
import { contact, demo, industrial } from "./programs";
import s from "./learning.module.css";

export const metadata = {
  title: "Learning",
  description: "Explore online courses, on-campus programs and industrial training at Netcoder Technology.",
};

const formats = [
  { title: "Online Learning", text: "Learn from anywhere, at your pace", tags: ["Flexible schedule", "Live + recorded sessions"], action: "Explore Online", href: "/courses", icon: "M9 18h6m-5 3h4M8 14a6 6 0 1 1 8 0l-1 2H9z" },
  { title: "On-Campus Training", text: "Learn with guidance, in a real classroom", tags: ["Face-to-face learning", "Mentor-led engagement"], action: "Explore Programs", href: "#career-domains", icon: "M3 21h18M5 21V7l8-4v18m0-14 6 3v11M8 9v2m2 2v2" },
  { title: "Industrial Training", text: "Train with real projects, not just theory", tags: ["Industry-aligned learning", "Job-focused training"], action: "Start Training", href: industrial, icon: "M3 5h18v13H3zM8 21h8m-4-3v3m-2-8-2 2 2 2m4-4 2 2-2 2" },
];
const audiences = [
  ["Students", "Build practical knowledge alongside your studies."],
  ["Working Professionals", "Learn new skills or strengthen existing ones."],
  ["Job Seekers", "Build practical skills and prepare for new opportunities."],
  ["Content Creators", "Learn creative skills and create better content."],
];
const benefits = [
  ["Learn By Doing", "Put what you learn into practice through assignments and projects.", "M3 5h6v6H3zM15 14h6v6h-6zM14 6h6m-3-3 3 3-3 3M10 17H4m3-3-3 3 3 3"],
  ["Work On Real Projects", "Build things that give you experience beyond the classroom.", "M10 19H3V3h18v7m-9 3h10v8H12z"],
  ["Learn With Guidance", "Get support and feedback throughout your learning journey.", "M9 4h12v11h-8m-6-3 4 2 3-4M5 12v9m-3-5V9h6m-1-5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"],
  ["Build Your Portfolio", "Turn your work into something you can actually showcase.", "M2 5h20v14H2zM5 15c0-3 5-3 5 0m-1-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4 2 2 2 4-5"],
];
const steps = [
  ["Learn", "Understand the fundamentals."], ["Create", "Apply what you’ve learned."],
  ["Practice", "Work on projects and assignments."], ["Improve", "Get feedback and refine your work."],
];
const questions = [
  ["Will I Receive A Certificate?", "Certificate availability depends on the specific program."],
  ["Can I Start As A Beginner?", "Check the course overview for prerequisites, or talk to us about where to start."],
  ["How Can I Book A Demo?", "Use Book Demo Class to message our team with your preferred course and time."],
  ["Can I Learn Online?", "Yes. Explore Online takes you to the course catalog, where you can open a course and start a lesson."],
  ["Where Is On-Campus Training Held?", "Our campus is near Govt. ITI in Dari, Dharamshala, Himachal Pradesh."],
  ["What Is Industrial Training?", "Industrial training gives you experience working on project briefs. Open Start Training to see the available programs."],
];
const articles = [
  { title: "What Makes A Good Logo?", tags: "Logo Design · Branding · Graphic Design", excerpt: "A good logo is more than a symbol. Learn the fundamentals that make a logo clear, memorable, and effective.", body: "Shrink your logo to the size of a browser icon. If two shapes merge, simplify the outline or increase the gap. Then try it in one colour on both light and dark backgrounds." },
  { title: "How Do You Choose A Colour Palette?", tags: "Colour Theory · Branding · Graphic Design", excerpt: "Choose a small set of colours that work together across a brand’s print and digital designs.", body: "Pick a neutral for the background, a dark colour for text and one accent for actions. Apply them to a sample page, then check that labels remain readable at their smallest size." },
  { title: "What Goes In A Design Portfolio?", tags: "Portfolio · Process · Graphic Design", excerpt: "Show how a project began, what you tried, and which decisions shaped the finished design.", body: "Lead with a finished piece, then show the brief and an early draft. Pick one revision and explain the feedback that led to it. This gives the reader a concrete example of your design process." },
];

function Photo({ file, size, className }: { file: string; size: string; className: string }) {
  return <div className={className}><Image src={`/images/Learning/${file}.png`} alt="" fill sizes={size} /></div>;
}

function Icon({ path }: { path: string }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round"><path d={path} /></svg>;
}

function Actions() {
  return <div className={s.actions}><a className={s.button} href={demo}>Book Demo Class</a><a className={s.secondary} href={contact}>Talk To Us</a></div>;
}

export default function LearningPage() {
  return (
    <>
      <section className={s.hero}>
        <span>Learning At Netcoder Technology</span>
        <h1>Ready To Learn<br />Something New?</h1>
        <p>Explore courses and training designed to help you learn through structured lessons, hands-on practice, and real projects.</p>
        <Actions />
      </section>
      <section className={s.formats} aria-labelledby="formats-heading">
        <h2 id="formats-heading">Choose How You Want To Learn</h2>
        {/* The landscape photo fills the portrait slot by height before its sides are cropped. */}
        <Photo file="Choose How You Want to Learn image" size="(max-width: 500px) 82vw, (max-width: 760px) 900px, 750px" className={s.formatPhoto} />
        {formats.map(format => <article className={s.format} key={format.title}>
          <div className={s.formatIcon}><Icon path={format.icon} /></div>
          <div><h3>{format.title}</h3><p>{format.text}</p>
            <ul>{format.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            <a href={format.href} className={s.miniButton}>{format.action}</a>
          </div>
        </article>)}
      </section>
      <CareerDomains />
      <section className={s.join}>
        <div><h2>Who Can<br />Join Us?</h2><p>Whether you’re starting out, building on what you already know, or preparing for your next step, find a learning option that fits where you are.</p></div>
        <div className={s.audience}>{audiences.map(([title, text]) => <article key={title}>
          <Photo file="Who Can Join Us image" size="110px" className={s.audiencePhoto} /><div><h3>{title}</h3><p>{text}</p></div>
        </article>)}</div>
      </section>
      <section className={s.section}>
        <h2>Why Learn<br />With Us?</h2>
        <div className={s.benefits}>
          {benefits.map(([title, text, icon]) => <article key={title}><Icon path={icon} /><h3>{title}</h3><p>{text}</p></article>)}
          <Photo file="why learn with us image" size="(max-width: 700px) 90vw, 26vw" className={s.benefitPhoto} />
        </div>
      </section>
      <section className={s.process}>
        <h2>How It<br />Works</h2>
        <ol>{steps.map(([title, text], index) => <li key={title}><span aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
      </section>
      <section className={s.section} id="questions">
        <h2>HAVE<br />QUESTIONS?</h2>
        <div className={s.questions}>{[questions.slice(0, 3), questions.slice(3)].map((column, group) => <div key={group}>
          {column.map(([question, answer], i) => <details key={question} open={group === 0 && i === 0}>
            <summary>{question}</summary><p>{answer}</p>
          </details>)}
        </div>)}</div>
      </section>
      <section className={s.section}>
        <div className={s.articleHeading}><div><h2>More From<br />Netcoder</h2><p>Insights, tips, and ideas to help you learn,<br />create, and stay curious.</p></div><Link className={s.button} href="/blogs">View All Articles</Link></div>
        <div className={s.articles}>{articles.map(article => <article key={article.title}>
          <Photo file="What Makes a Good Logo" size="(max-width: 700px) 90vw, 29vw" className={s.articlePhoto} />
          <div><small>{article.tags}</small><h3>{article.title}</h3><p>{article.excerpt}</p><span className={s.readTime}>◷ &nbsp;1 min read</span>
            <details><summary aria-label={`Read more about ${article.title}`}>See more →</summary><p>{article.body}</p></details>
          </div>
        </article>)}</div>
      </section>
      <section className={s.cta}>
        <div><h2>Find Your Way<br />To Learn.</h2><p>Choose a course, explore your learning options, or speak with our team about where to start.</p><Actions /></div>
        <Photo file="Find your way to learn." size="(max-width: 700px) 90vw, 42vw" className={s.ctaPhoto} />
      </section>
    </>
  );
}
