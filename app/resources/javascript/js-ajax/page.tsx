import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("javascript", "js-ajax");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"javascript"} lessonId={"js-ajax"} />;
}
