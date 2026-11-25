import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "c-edge-cases");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"c-edge-cases"} />;
}
