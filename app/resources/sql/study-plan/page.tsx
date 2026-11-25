import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("sql", "sql-study-plan");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"sql"} lessonId={"sql-study-plan"} />;
}
