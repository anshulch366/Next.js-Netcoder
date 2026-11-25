import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("php", "php-reference-overview");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"php"} lessonId={"php-reference-overview"} />;
}
