import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("javascript", "js-html-events");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"javascript"} lessonId={"js-html-events"} />;
}
