export type Topic = "python" | "javascript" | "sql";

export interface Course {
  slug: Topic;
  language: string;
  title: string;
  description: string;
}
