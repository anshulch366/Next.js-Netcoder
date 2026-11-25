import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-reacting-to-input-with-state");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-reacting-to-input-with-state"} />;
}
