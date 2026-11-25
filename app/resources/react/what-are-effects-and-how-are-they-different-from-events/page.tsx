import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-effects-vs-events");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-effects-vs-events"} />;
}
