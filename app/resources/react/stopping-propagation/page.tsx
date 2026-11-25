import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-stopping-event-propagation");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-stopping-event-propagation"} />;
}
