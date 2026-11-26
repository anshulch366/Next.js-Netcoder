import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "tooltip");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"tooltip"} />;
}
