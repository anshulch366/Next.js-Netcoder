import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "grid");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"grid"} />;
}
