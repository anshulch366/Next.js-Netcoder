import type { LearningLanguage, LearningLesson } from "./learning-resources";

export type ResourceTopic = Pick<LearningLesson, "id" | "title" | "section" | "level"> & {
  exampleTitles: string[];
};

export type ResourceSubject = Omit<LearningLanguage, "lessons"> & { lessons: ResourceTopic[] };
export type SubjectLink = Pick<LearningLanguage, "id" | "label"> & { count: number };

export function resourceHref(subject: string, lesson?: string) {
  const query = new URLSearchParams({ subject });
  if (lesson) query.set("lesson", lesson);
  return "/resources?" + query.toString();
}
