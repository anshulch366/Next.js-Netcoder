import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "navbar");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"navbar"} />;
}
