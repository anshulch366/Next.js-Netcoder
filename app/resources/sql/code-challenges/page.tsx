import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("sql", "sql-code-challenges");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"sql"} lessonId={"sql-code-challenges"} />;
}
