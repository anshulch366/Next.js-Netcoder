import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-avoid-deeply-nested-state");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-avoid-deeply-nested-state"} />;
}
