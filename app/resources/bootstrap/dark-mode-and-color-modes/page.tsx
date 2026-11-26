import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "dark-mode");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"dark-mode"} />;
}
