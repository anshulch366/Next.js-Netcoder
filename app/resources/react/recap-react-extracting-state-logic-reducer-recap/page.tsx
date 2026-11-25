import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-extracting-state-logic-reducer-recap");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-extracting-state-logic-reducer-recap"} />;
}
