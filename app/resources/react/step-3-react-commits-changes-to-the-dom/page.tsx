import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-commit-to-dom");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-commit-to-dom"} />;
}
