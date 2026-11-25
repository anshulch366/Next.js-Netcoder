import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-immer-array-updates");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-immer-array-updates"} />;
}
