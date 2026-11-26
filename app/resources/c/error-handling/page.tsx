import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "error-handling");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"error-handling"} />;
}
