import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("sql", "sql-right-join");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"sql"} lessonId={"sql-right-join"} />;
}
