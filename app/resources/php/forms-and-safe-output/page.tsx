import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("php", "forms");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"php"} lessonId={"forms"} />;
}
