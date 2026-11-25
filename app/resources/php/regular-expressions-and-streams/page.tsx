import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("php", "php-reference-regex-streams");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"php"} lessonId={"php-reference-regex-streams"} />;
}
