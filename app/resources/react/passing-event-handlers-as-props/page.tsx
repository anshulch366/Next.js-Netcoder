import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-event-handlers-as-props");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-event-handlers-as-props"} />;
}
