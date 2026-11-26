import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "alerts");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"alerts"} />;
}
