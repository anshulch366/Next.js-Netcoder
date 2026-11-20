"use client";

import { useState } from "react";
import s from "./learning.module.css";

const domains = [
  { name: "Graphic Design", description: "Build a foundation in visual design. Work with type, colour and composition to give a brand its own identity.", topics: ["Photoshop", "Illustrator", "Typography", "Composition", "Colour Theory", "Branding"] },
  { name: "Web Development", description: "Build responsive websites from the first HTML element to a working application connected to a database.", topics: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Databases"] },
  { name: "Data Science", description: "Turn raw data into answers. Clean a dataset, explore patterns and explain what you find with a chart.", topics: ["Python", "Pandas", "Statistics", "SQL", "Charts", "Modelling"] },
  { name: "Digital Marketing", description: "Plan campaigns around your audience, publish content and measure which channels bring people back.", topics: ["SEO", "Content", "Social Media", "Campaigns", "Email", "Analytics"] },
  { name: "UI/UX Design", description: "Study how people use a product and turn your findings into wireframes and interactive prototypes.", topics: ["Research", "Wireframes", "Figma", "Prototypes", "Testing"] },
  { name: "Animation", description: "Bring a character to life through timing, movement and a sequence of carefully planned scenes.", topics: ["Storyboards", "Keyframes", "2D", "3D", "Motion"] },
  { name: "Data Analytics", description: "Bring spreadsheets and databases together to build reports that answer everyday business questions.", topics: ["Excel", "SQL", "Dashboards", "Reporting", "Charts"] },
  { name: "Content Creation", description: "Take an idea from a short script to an edited video, with visuals and sound that tell a clear story.", topics: ["Scripting", "Video", "Audio", "Editing", "Publishing"] },
];

export default function CareerDomains() {
  const [page, setPage] = useState(0);
  return (
    <section id="career-domains" className={s.section}>
      <h2>Popular Career<br />Domains</h2>
      <p className={s.introCopy}>Explore courses built around the work you want to do. Find the skills, tools and projects that fit your next step.</p>
      <div className={s.domains} id="domain-list" aria-live="polite">
        {domains.slice(page * 4, page * 4 + 4).map(domain => (
          <article key={domain.name}>
            <h3>{domain.name}</h3><p>{domain.description}</p>
            <ul>{domain.topics.map(topic => <li key={topic}>{topic}</li>)}</ul>
          </article>
        ))}
      </div>
      <div className={s.pager} role="group" aria-label="Career domain pages">
        {[0, 1].map(index => <button type="button" key={index} aria-label={`Show career domains ${index * 4 + 1} to ${index * 4 + 4}`} aria-pressed={page === index} aria-controls="domain-list" onClick={() => setPage(index)} />)}
      </div>
    </section>
  );
}
