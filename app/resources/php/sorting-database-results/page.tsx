import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("php", "php-mysql-order");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"php"} lessonId={"php-mysql-order"} />;
}
