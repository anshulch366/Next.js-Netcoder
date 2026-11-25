import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("php", "php-classes-objects");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"php"} lessonId={"php-classes-objects"} />;
}
