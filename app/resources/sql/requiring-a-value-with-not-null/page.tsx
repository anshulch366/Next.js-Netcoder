import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("sql", "sql-not-null");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"sql"} lessonId={"sql-not-null"} />;
}
