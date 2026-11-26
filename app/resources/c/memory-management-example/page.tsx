import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "memory-example");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"memory-example"} />;
}
