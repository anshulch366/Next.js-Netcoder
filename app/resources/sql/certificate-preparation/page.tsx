import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("sql", "sql-certificate-prep");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"sql"} lessonId={"sql-certificate-prep"} />;
}
