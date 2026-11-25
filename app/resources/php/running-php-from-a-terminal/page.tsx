import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("php", "php-compiler-terminal");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"php"} lessonId={"php-compiler-terminal"} />;
}
