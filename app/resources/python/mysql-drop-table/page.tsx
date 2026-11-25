import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-mysql-drop-table");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-mysql-drop-table"} />;
}
