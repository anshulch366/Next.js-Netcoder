import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-reading-state-to-calculate-next-state");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-reading-state-to-calculate-next-state"} />;
}
