import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "button-groups");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"button-groups"} />;
}
