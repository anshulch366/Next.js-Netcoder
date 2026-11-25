import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-define-function");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-define-function"} />;
}
