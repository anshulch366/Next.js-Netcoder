import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "colors");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"colors"} />;
}
