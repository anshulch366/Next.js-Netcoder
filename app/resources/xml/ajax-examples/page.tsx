import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "ajax-examples");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"ajax-examples"} />;
}
