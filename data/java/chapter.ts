import { chapter } from "../resource-chapter";

type ChapterTopic = Parameters<typeof chapter>[1][number];
type JavaTopic = Omit<ChapterTopic, "id" | "level">;

export function javaChapter(section: string, level: ChapterTopic["level"], topics: JavaTopic[]) {
  const prefix = section === "Java Reference" ? "java-ref-" : "java-";
  return chapter(section, topics.map(topic => ({
    ...topic,
    id: prefix + topic.title.toLowerCase().replace(/^java /, "").replace(/[^a-z0-9]+/g, "-").replace(/-$/, ""),
    level,
  })));
}

function indent(source: string, spaces: number) {
  return source.split("\n").map(line => line ? " ".repeat(spaces) + line : "").join("\n");
}

export function javaProgram(body: string, imports: string[] = [], members = "") {
  const declarations = imports.map(name => "import " + name + ";").join("\n");
  const main = "public static void main(String[] args) throws Exception {\n" + indent(body, 4) + "\n}";
  const classBody = members ? members + "\n\n" + main : main;
  return (declarations ? declarations + "\n\n" : "") + "public class Main {\n" + indent(classBody, 4) + "\n}";
}
