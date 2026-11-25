import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-consolidate-state-logic-with-reducer");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-consolidate-state-logic-with-reducer"} />;
}
