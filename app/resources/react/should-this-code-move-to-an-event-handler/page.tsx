import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-should-code-move-to-event-handler");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-should-code-move-to-event-handler"} />;
}
