import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "list-groups");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"list-groups"} />;
}
