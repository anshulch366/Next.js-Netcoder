import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("sql", "sql-update");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"sql"} lessonId={"sql-update"} />;
}
