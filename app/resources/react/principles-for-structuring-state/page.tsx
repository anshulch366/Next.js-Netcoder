import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-state-structure-principles");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-state-structure-principles"} />;
}
