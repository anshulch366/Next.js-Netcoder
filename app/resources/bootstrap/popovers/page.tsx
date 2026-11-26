import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "popover");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"popover"} />;
}
