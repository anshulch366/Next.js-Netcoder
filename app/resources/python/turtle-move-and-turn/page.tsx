import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-turtle-move-and-turn");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-turtle-move-and-turn"} />;
}
