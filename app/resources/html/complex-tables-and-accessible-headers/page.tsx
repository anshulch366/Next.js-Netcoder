import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "table-layout");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"table-layout"} />;
}
