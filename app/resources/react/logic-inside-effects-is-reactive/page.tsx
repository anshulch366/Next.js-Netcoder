import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-logic-inside-effects-is-reactive");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-logic-inside-effects-is-reactive"} />;
}
