import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "c-for-loop");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"c-for-loop"} />;
}
