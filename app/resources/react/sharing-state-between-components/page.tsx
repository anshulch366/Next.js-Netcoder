import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-sharing-state-between-components");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-sharing-state-between-components"} />;
}
