import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-remove-state-from-child-components");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-remove-state-from-child-components"} />;
}
