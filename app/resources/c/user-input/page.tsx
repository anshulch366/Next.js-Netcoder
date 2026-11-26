import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "user-input");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"user-input"} />;
}
