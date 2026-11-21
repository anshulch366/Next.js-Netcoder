import type { MetadataRoute } from "next";
import { courses } from "@/data/courses";
import { lessons } from "@/data/lessons";
import { learningLanguages } from "@/data/learning-resources";
import { resourceHref } from "@/data/resource-navigation";
import { siteOrigin } from "./site-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/learning", "/services", "/who-we-are", "/blogs", "/courses", "/resources",
    ...courses.flatMap(course => [`/courses/${course.slug}`, `/resources/${course.slug}`]),
    ...lessons.map(lesson => `/courses/${lesson.course}/lessons/${lesson.slug}`),
    ...learningLanguages.flatMap(subject => subject.lessons.map(lesson => resourceHref(subject.id, lesson.id))),
  ];
  // This Next.js version inserts loc values directly into XML.
  return paths.map(path => ({ url: new URL(path, siteOrigin).href.replaceAll("&", "&amp;") }));
}
