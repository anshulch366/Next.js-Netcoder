import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-declaring-an-effect-event");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-declaring-an-effect-event"} />;
}
