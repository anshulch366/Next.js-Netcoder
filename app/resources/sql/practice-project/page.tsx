import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("sql", "sql-learning-project");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"sql"} lessonId={"sql-learning-project"} />;
}
