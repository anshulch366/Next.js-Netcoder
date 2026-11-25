import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-sharing-logic-between-event-handlers");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-sharing-logic-between-event-handlers"} />;
}
