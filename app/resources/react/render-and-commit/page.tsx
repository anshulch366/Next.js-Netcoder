import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-render-and-commit");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-render-and-commit"} />;
}
