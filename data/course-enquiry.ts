import type { CourseCategory, LmsCourse } from "./lms-courses";

const toolsByCourse: Record<string, string[]> = {
  "graphic-design": ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
  "web-development": ["HTML", "CSS", "JavaScript", "Browser DevTools"],
  "advanced-graphic-design": ["Figma", "Adobe Illustrator", "Adobe InDesign"],
  "ui-ux-design-systems": ["Figma", "FigJam", "Prototyping tools"],
  "brand-logo-workshop": ["Adobe Illustrator", "Figma", "Vector tools"],
  "fullstack-nextjs-lab": ["Next.js", "TypeScript", "CSS Modules"],
  "javascript-interactive-dom": ["JavaScript", "DOM APIs", "Browser DevTools"],
  "think-in-python": ["Python", "Code editor", "Terminal"],
  "ask-better-queries-sql": ["SQL", "Database editor", "Query tools"],
  "digital-marketing-growth": ["Analytics", "Search tools", "Campaign dashboards"],
  "seo-analytics-sprint": ["Search Console", "Analytics", "Structured data tools"],
  "multimedia-video-editing": ["Video editor", "Audio editor", "Motion graphics tools"],
  "motion-graphics-essentials": ["Motion graphics editor", "Timeline tools", "Vector assets"],
  "dsa-problem-solving": ["Code editor", "Programming language", "Practice platforms"],
  "responsive-css-architecture": ["CSS", "CSS Modules", "Browser DevTools"],
  "packaging-print-production": ["Vector design tools", "CMYK workflow", "Print export tools"],
  "social-media-creative-sprint": ["Design editor", "Social media analytics", "Content planner"],
  "audio-podcast-production": ["Audio editor", "Microphone", "Mixing tools"],
};

const opportunities: Record<CourseCategory, string> = {
  Design: "Use these skills in visual design, brand identity, product design, or a stronger creative portfolio. Your next step can be a focused project that shows how you solve a real design problem.",
  "Web Development": "Build responsive sites and interactive products. These foundations can lead into frontend, full stack, accessibility, or product engineering projects.",
  "Digital Marketing": "Apply your learning to campaigns, content, search visibility, and measurement. A portfolio of experiments and results can support further work in marketing and growth.",
  Multimedia: "Create work for video, motion, audio, and digital storytelling. Finished pieces can become the foundation of a multimedia portfolio.",
  Programming: "Use these foundations to solve practical problems and build projects. You can then explore deeper software, data, or automation topics.",
};

export function courseEnquiryInfo(course: LmsCourse) {
  return {
    tools: toolsByCourse[course.id] ?? course.skills.slice(0, 3),
    opportunities: opportunities[course.category],
  };
}
