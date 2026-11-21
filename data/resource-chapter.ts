import type { LearningLesson } from "./learning-resources";

type ChapterTopic = Pick<LearningLesson, "id" | "title" | "summary" | "content" | "reading"> & {
  level: NonNullable<LearningLesson["level"]>;
  examples: { title: string; code: string; result: string }[];
  quizzes: LearningLesson["quiz"][];
};

export function chapter(section: string, topics: ChapterTopic[]): LearningLesson[] {
  return topics.map((topic) => ({
    ...topic,
    section,
    example: topic.examples[0].code,
    quiz: topic.quizzes[0],
  }));
}
