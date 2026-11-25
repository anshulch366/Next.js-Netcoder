import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("sql", "sql-select-into");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"sql"} lessonId={"sql-select-into"} />;
}
