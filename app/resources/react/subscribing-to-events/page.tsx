import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-subscribing-to-events");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-subscribing-to-events"} />;
}
