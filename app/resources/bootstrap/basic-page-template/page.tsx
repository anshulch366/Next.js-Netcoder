import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "basic-template");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"basic-template"} />;
}
