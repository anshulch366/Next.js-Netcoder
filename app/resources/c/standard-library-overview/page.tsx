import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "c-reference-overview");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"c-reference-overview"} />;
}
