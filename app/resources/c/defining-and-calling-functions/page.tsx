import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "c-function-basics");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"c-function-basics"} />;
}
