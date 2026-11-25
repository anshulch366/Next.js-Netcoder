import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("php", "php-access-modifiers");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"php"} lessonId={"php-access-modifiers"} />;
}
