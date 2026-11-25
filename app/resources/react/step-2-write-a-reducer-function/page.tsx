import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-write-a-reducer-function");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-write-a-reducer-function"} />;
}
