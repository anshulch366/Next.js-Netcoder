import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "type-conversion");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"type-conversion"} />;
}
