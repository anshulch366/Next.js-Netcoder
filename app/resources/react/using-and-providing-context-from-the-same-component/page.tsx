import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-context-same-component");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-context-same-component"} />;
}
