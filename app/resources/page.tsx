import ResourceStudio from "@/components/resources/ResourceStudio";
import { learningLanguages } from "@/data/learning-resources";
import { resourceHref } from "@/data/resource-navigation";
import { pageMetadata, siteOrigin } from "../site-metadata";

const subjects = learningLanguages.map(({ id, label, lessons }) => ({ id, label, count: lessons.length, firstLessonId: lessons[0]?.id ?? "" }));
const navigation = learningLanguages.map(({ lessons, ...language }) => ({
  ...language,
  lessons: lessons.map(({ id, title, section, level, examples }) => ({
    id, title, section, level, exampleTitles: examples?.map(example => example.title) ?? [],
  })),
}));

export const metadata = pageMetadata(
  "/resources",
  "Coding Resource Library",
  "Browse coding lessons by subject and chapter. Study worked examples, check your answers and explore HTML, CSS, JavaScript and more.",
);

export default async function ResourcesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const subjectId = typeof params.subject === "string" ? params.subject : undefined;
  const requestedLessonId = typeof params.lesson === "string" ? params.lesson : undefined;
  const language = learningLanguages.find(item => item.id === subjectId) ?? learningLanguages[0];
  const lesson = language.lessons.find(item => item.id === requestedLessonId) ?? language.lessons[0];
  const index = navigation.find(item => item.id === language.id)!;
  const directory = navigation.map(subject => {
    const chapters = new Map<string, string>();
    for (const topic of subject.lessons) {
      const label = topic.section ?? subject.label;
      if (!chapters.has(label)) chapters.set(label, resourceHref(subject.id, topic.id));
    }
    return { subject: subject.label, chapters: Array.from(chapters, ([title, href]) => ({ title, href })) };
  });
  const structuredData = {
    "@context": "https://schema.org", "@type": "CollectionPage",
    name: "Netcoder Learning Library", url: new URL("/resources", siteOrigin).href,
    about: subjects.map(subject => subject.label),
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <ResourceStudio subjects={subjects} language={index} lesson={lesson} directory={directory} />
  </>;
}
