import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "ajax-response");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"ajax-response"} />;
}
