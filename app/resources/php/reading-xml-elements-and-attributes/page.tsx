import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("php", "php-simplexml-get");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"php"} lessonId={"php-simplexml-get"} />;
}
