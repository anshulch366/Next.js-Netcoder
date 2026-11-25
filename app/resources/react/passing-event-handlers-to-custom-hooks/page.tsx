import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-passing-event-handlers-to-custom-hooks");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-passing-event-handlers-to-custom-hooks"} />;
}
