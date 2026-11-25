import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "c-test-cases");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"c-test-cases"} />;
}
