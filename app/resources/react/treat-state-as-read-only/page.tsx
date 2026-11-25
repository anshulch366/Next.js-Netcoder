import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-treat-state-as-read-only");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-treat-state-as-read-only"} />;
}
