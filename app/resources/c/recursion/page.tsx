import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "recursion");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"recursion"} />;
}
