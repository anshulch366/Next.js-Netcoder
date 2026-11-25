import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-context-alternative-to-passing-props");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-context-alternative-to-passing-props"} />;
}
