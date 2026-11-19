import type { Topic } from "./course";

export interface Lesson {
  course: Topic;
  slug: string;
  title: string;
  minutes: number;
  explanation: string;
  code: string;
  walkthrough: string;
  exercise: string;
  solution: string;
}
