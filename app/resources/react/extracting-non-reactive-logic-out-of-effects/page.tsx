import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-extracting-non-reactive-logic-from-effects");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-extracting-non-reactive-logic-from-effects"} />;
}
