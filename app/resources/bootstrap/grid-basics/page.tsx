import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "grid-basic");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"grid-basic"} />;
}
