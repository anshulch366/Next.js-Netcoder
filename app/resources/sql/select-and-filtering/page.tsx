import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("sql", "select");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"sql"} lessonId={"select"} />;
}
