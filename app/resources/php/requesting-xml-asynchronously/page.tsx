import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("php", "php-ajax-xml");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"php"} lessonId={"php-ajax-xml"} />;
}
