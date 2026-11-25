import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("php", "php-server-basics");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"php"} lessonId={"php-server-basics"} />;
}
