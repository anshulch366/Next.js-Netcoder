import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-event-handler-prop-names");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-event-handler-prop-names"} />;
}
