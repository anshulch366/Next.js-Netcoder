import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "study-browserapis-drag-and-drop-api");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"study-browserapis-drag-and-drop-api"} />;
}
