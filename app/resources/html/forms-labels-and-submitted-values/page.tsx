import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "forms");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"forms"} />;
}
