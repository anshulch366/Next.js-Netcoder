import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-input-state-challenges");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-input-state-challenges"} />;
}
