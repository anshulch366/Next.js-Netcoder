import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "stacks");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"stacks"} />;
}
