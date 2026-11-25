import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-limitations-of-effect-events");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-limitations-of-effect-events"} />;
}
