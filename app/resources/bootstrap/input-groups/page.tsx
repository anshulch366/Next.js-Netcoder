import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "input-groups");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"input-groups"} />;
}
