import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("php", "php-form-complete");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"php"} lessonId={"php-form-complete"} />;
}
