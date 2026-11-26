import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "progress-bars");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"progress-bars"} />;
}
