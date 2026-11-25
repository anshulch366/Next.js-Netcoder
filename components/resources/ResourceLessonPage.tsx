import { notFound } from "next/navigation";
import ResourceStudio from "@/components/resources/ResourceStudio";
import { learningLanguages, type LearningLesson } from "@/data/learning-resources";
import { resourceHref } from "@/data/resource-navigation";
import { pageMetadata, siteOrigin } from "@/app/site-metadata";

const subjects = learningLanguages.map(({ id, label, lessons }) => ({ id, label, count: lessons.length, firstLessonId: lessons[0]?.id ?? "" }));
const navigation = learningLanguages.map(({ lessons, ...language }) => ({
  ...language,
  lessons: lessons.map(({ id, title, section, level, examples }) => ({
    id, title, section, level, exampleTitles: examples?.map(example => example.title) ?? [],
  })),
}));

function findResource(subjectId: string, lessonId: string) {
  const language = learningLanguages.find(item => item.id === subjectId);
  const lesson = language?.lessons.find(item => item.id === lessonId);
  if (!language || !lesson) notFound();
  return { language, lesson };
}

export function resourceLessonMetadata(subjectId: string, lessonId: string) {
  const { language, lesson } = findResource(subjectId, lessonId);
  return pageMetadata(
    resourceHref(language.id, lesson.id),
    `${lesson.title} · ${lesson.section ?? language.label}`,
    lesson.summary,
  );
}

export default function ResourceLessonPage({ subjectId, lessonId }: { subjectId: string; lessonId: string }) {
  const { language, lesson } = findResource(subjectId, lessonId);
  const index = navigation.find(item => item.id === language.id)!;
  const structuredData = {
    "@context": "https://schema.org", "@type": "LearningResource",
    name: lesson.title, description: lesson.summary,
    url: new URL(resourceHref(language.id, lesson.id), siteOrigin).href,
    about: language.label, educationalLevel: lesson.level,
    inLanguage: lesson.contentLanguage ?? "en", learningResourceType: "Lesson",
    isPartOf: { "@type": "CollectionPage", url: new URL("/resources", siteOrigin).href },
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <ResourceStudio subjects={subjects} language={index} lesson={lesson as LearningLesson} />
  </>;
}
