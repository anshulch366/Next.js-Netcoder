import { chapter } from "../resource-chapter";
import type { LearningLesson } from "../learning-resources";

type Sample = LearningLesson["quiz"] & { title: string; code: string };
type Topic = Pick<LearningLesson, "id" | "title" | "summary" | "content"> & {
  level: NonNullable<LearningLesson["level"]>;
  samples: Sample[];
};

export function javascriptChapter(section: string, topics: Topic[]) {
  return chapter(section, topics.map(({ samples, ...topic }) => ({
    ...topic,
    examples: samples.map(({ title, code, options, answer, explanation }) => ({
      title, code, result: `Console output — ${options[answer]}. ${explanation}`,
    })),
    quizzes: samples.map(({ question, options, answer, explanation }) => ({
      question, options, answer, explanation,
    })),
  })));
}
