import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("sql", "sql-null-functions");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"sql"} lessonId={"sql-null-functions"} />;
}
