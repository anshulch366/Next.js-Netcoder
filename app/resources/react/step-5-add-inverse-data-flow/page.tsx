import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "thinking-inverse-flow");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"thinking-inverse-flow"} />;
}
