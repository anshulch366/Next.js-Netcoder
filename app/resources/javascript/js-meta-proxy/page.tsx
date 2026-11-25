import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("javascript", "js-meta-proxy");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"javascript"} lessonId={"js-meta-proxy"} />;
}
