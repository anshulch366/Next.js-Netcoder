import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("typescript", "error-handling");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"typescript"} lessonId={"error-handling"} />;
}
