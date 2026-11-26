import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "get-started");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"get-started"} />;
}
