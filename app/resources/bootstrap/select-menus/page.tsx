import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "select-menus");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"select-menus"} />;
}
