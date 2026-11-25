import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("php", "php-static-properties");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"php"} lessonId={"php-static-properties"} />;
}
