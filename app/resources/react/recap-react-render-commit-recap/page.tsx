import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-render-commit-recap");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-render-commit-recap"} />;
}
