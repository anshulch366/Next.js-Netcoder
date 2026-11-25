import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("sql", "sql-where");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"sql"} lessonId={"sql-where"} />;
}
