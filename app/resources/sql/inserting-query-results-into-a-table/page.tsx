import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("sql", "sql-insert-select");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"sql"} lessonId={"sql-insert-select"} />;
}
