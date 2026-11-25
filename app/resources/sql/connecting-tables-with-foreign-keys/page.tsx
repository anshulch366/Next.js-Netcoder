import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("sql", "sql-foreign-key");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"sql"} lessonId={"sql-foreign-key"} />;
}
