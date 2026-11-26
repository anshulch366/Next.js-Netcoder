import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "dropdowns");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"dropdowns"} />;
}
