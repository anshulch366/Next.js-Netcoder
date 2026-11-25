import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "c-structs-and-memory");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"c-structs-and-memory"} />;
}
