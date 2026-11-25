import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-reading-latest-props-state-effect-events");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-reading-latest-props-state-effect-events"} />;
}
