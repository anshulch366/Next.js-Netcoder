import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "test-cases");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"test-cases"} />;
}
