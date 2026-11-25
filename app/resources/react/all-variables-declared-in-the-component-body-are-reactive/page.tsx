import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-component-body-variables-are-reactive");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-component-body-variables-are-reactive"} />;
}
