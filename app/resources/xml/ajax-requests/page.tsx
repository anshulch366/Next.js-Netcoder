import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "ajax-request");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"ajax-request"} />;
}
