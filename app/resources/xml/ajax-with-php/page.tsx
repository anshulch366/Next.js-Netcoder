import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "ajax-php");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"ajax-php"} />;
}
