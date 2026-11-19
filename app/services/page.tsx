import Link from "next/link";

export const metadata = { title: "Digital services" };

const services = [
  ["Web Development", "Plan and build a responsive website, from its first page to the features your visitors use every day."],
  ["UI/UX Design", "Map the steps people take through your product and explore layouts with wireframes and interactive prototypes."],
  ["Branding", "Define a visual identity with a logo, typography, color palette, and guidelines for using them together."],
  ["Digital Marketing", "Plan content around your audience, choose channels, and measure how campaigns perform."],
];

export default function Services() {
  return (
    <section className="reading">
      <Link href="/" className="text-link">Back to paths</Link>
      <div className="intro">
        <div className="eyebrow">Want to build</div>
        <h1>Digital services</h1>
        <p>Explore the design and development work behind a digital project.</p>
      </div>
      {services.map(([title, description]) => (
        <section className="service-entry" key={title}><h2>{title}</h2><p>{description}</p></section>
      ))}
    </section>
  );
}
