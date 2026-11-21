import { notFound } from "next/navigation";
import ResourceStudio from "@/components/resources/ResourceStudio";
import { learningLanguages } from "@/data/learning-resources";
import { resourceHref } from "@/data/resource-navigation";
import { pageMetadata, siteOrigin } from "../site-metadata";

const subjects = learningLanguages.map(({ id, label, lessons }) => ({ id, label, count: lessons.length }));
const navigation = learningLanguages.map(({ lessons, ...language }) => ({
  ...language,
  lessons: lessons.map(({ id, title, section, level, examples }) => ({
    id, title, section, level, exampleTitles: examples?.map(example => example.title) ?? [],
  })),
}));

async function selection(searchParams: PageProps<"/resources">["searchParams"]) {
  const { subject, lesson: id } = await searchParams;
  const language = subject === undefined ? learningLanguages[0] : learningLanguages.find(item => item.id === subject);
  if (!language) notFound();
  const lesson = id === undefined ? language.lessons[0] : language.lessons.find(item => item.id === id);
  if (!lesson) notFound();
  return { language, lesson, isLibrary: subject === undefined && id === undefined };
}

export async function generateMetadata({ searchParams }: PageProps<"/resources">) {
  const { language, lesson, isLibrary } = await selection(searchParams);
  if (isLibrary) return pageMetadata("/resources", "Coding Resource Library", "Browse coding lessons by subject and chapter. Study worked examples, check your answers and explore HTML, CSS, JavaScript and more.");
  const title = lesson.title + " · " + (lesson.section ?? language.label);
  return pageMetadata(resourceHref(language.id, lesson.id), title, lesson.summary);
}

export default async function ResourcesPage({ searchParams }: PageProps<"/resources">) {
  const { language, lesson, isLibrary } = await selection(searchParams);
  const index = navigation.find(item => item.id === language.id)!;
  const directory = isLibrary ? navigation.map(subject => {
    const chapters = new Map<string, string>();
    for (const topic of subject.lessons) {
      const label = topic.section ?? subject.label;
      if (!chapters.has(label)) chapters.set(label, resourceHref(subject.id, topic.id));
    }
    return { subject: subject.label, chapters: Array.from(chapters, ([title, href]) => ({ title, href })) };
  }) : undefined;
  const structuredData = isLibrary ? {
    "@context": "https://schema.org", "@type": "CollectionPage",
    name: "Netcoder Learning Library", url: new URL("/resources", siteOrigin).href,
    about: subjects.map(subject => subject.label),
  } : {
    "@context": "https://schema.org", "@type": "LearningResource",
    name: lesson.title, description: lesson.summary,
    url: new URL(resourceHref(language.id, lesson.id), siteOrigin).href,
    about: language.label, educationalLevel: lesson.level,
    inLanguage: lesson.contentLanguage ?? "en", learningResourceType: "Lesson",
    isPartOf: { "@type": "CollectionPage", url: new URL("/resources", siteOrigin).href },
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <ResourceStudio subjects={subjects} language={index} lesson={lesson} directory={directory} />
  </>;
}
