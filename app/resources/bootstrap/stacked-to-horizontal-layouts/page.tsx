import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "stacked-horizontal");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"stacked-horizontal"} />;
}
