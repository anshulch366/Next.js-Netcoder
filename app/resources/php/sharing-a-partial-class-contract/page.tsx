import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("php", "php-abstract-classes");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"php"} lessonId={"php-abstract-classes"} />;
}
