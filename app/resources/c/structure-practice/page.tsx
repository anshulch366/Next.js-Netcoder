import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "c-struct-challenges");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"c-struct-challenges"} />;
}
