import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("sql", "sql-select-top-limit");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"sql"} lessonId={"sql-select-top-limit"} />;
}
