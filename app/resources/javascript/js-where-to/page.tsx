import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("javascript", "js-where-to");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"javascript"} lessonId={"js-where-to"} />;
}
