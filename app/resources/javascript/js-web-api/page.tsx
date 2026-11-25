import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("javascript", "js-web-api");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"javascript"} lessonId={"js-web-api"} />;
}
