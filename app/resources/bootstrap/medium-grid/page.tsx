import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "grid-md");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"grid-md"} />;
}
