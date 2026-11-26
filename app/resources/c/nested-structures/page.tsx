import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "nested-structs");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"nested-structs"} />;
}
