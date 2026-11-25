import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "c-organize-code");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"c-organize-code"} />;
}
