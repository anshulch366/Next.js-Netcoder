import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("sql", "sql-intro");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"sql"} lessonId={"sql-intro"} />;
}
