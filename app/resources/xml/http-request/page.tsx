import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "httprequest");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"httprequest"} />;
}
