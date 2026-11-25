import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("php", "php-syllabus-study-plan");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"php"} lessonId={"php-syllabus-study-plan"} />;
}
