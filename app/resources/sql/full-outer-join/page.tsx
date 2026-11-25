import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("sql", "sql-full-join");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"sql"} lessonId={"sql-full-join"} />;
}
