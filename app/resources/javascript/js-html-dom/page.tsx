import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("javascript", "js-html-dom");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"javascript"} lessonId={"js-html-dom"} />;
}
