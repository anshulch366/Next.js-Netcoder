import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("sql", "sql-data-types-reference");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"sql"} lessonId={"sql-data-types-reference"} />;
}
