import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "structs-memory");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"structs-memory"} />;
}
