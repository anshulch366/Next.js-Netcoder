import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "syllabus");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"syllabus"} />;
}
