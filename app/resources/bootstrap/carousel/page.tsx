import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "carousel");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"carousel"} />;
}
