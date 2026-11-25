import { learningLanguages, type LearningLanguage, type LearningLesson } from "./learning-resources";

export type ResourceTopic = Pick<LearningLesson, "id" | "title" | "section" | "level"> & {
  exampleTitles: string[];
};

export type ResourceSubject = Omit<LearningLanguage, "lessons"> & { lessons: ResourceTopic[] };
export type SubjectLink = Pick<LearningLanguage, "id" | "label"> & { count: number; firstLessonId: string };

function baseSlug(title: string, subject: string) {
  const withoutSubject = title.toLowerCase().startsWith(subject.toLowerCase())
    ? title.slice(subject.length).replace(/^\s*[:\u00b7-]?\s*/, "")
    : title;
  return withoutSubject.toLowerCase()
    .replace(/\bintroduction\b/g, "intro")
    .normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "lesson";
}

export function resourceLessonFolderName(subjectId: string, lessonId: string) {
  const subject = learningLanguages.find(item => item.id === subjectId);
  const lesson = subject?.lessons.find(item => item.id === lessonId);
  if (!subject || !lesson) return lessonId;
  const base = baseSlug(lesson.title, subject.label);
  const matches = subject.lessons.filter(item => baseSlug(item.title, subject.label) === base);
  if (matches.length === 1) return base;
  const suffix = lesson.id.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `${base}-${suffix}`;
}

export function resourceHref(subject: string, lesson?: string) {
  if (!lesson) return `/resources/${subject}`;
  return `/resources/${subject}/${resourceLessonFolderName(subject, lesson)}`;
}
