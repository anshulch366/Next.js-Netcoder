import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "ajax-database");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"ajax-database"} />;
}
