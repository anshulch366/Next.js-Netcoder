import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("sql", "joins");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"sql"} lessonId={"joins"} />;
}
