import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "ajax-asp");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"ajax-asp"} />;
}
