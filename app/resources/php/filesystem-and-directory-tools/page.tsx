import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("php", "php-reference-filesystem-directory");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"php"} lessonId={"php-reference-filesystem-directory"} />;
}
