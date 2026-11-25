import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "c-structs");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"c-structs"} />;
}
