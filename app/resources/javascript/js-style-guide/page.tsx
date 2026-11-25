import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("javascript", "js-style-guide");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"javascript"} lessonId={"js-style-guide"} />;
}
