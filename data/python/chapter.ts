import { chapter } from "../resource-chapter";

type ChapterTopic = Parameters<typeof chapter>[1][number];
type PythonTopic = Omit<ChapterTopic, "id" | "level">;

export function pythonChapter(section: string, level: ChapterTopic["level"], topics: PythonTopic[]) {
  return chapter(section, topics.map(topic => ({
    ...topic,
    id: "py-" + topic.title.toLowerCase().replace(/^python /, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    level,
  })));
}
