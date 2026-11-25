import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("php", "php-form-email-url");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"php"} lessonId={"php-form-email-url"} />;
}
