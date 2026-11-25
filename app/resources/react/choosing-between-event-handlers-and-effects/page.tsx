import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-choosing-between-event-handlers-and-effects");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-choosing-between-event-handlers-and-effects"} />;
}
