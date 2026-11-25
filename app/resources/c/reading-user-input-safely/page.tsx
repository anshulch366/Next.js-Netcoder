import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "c-user-input");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"c-user-input"} />;
}
