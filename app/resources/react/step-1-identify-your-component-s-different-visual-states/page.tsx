import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-identify-visual-states");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-identify-visual-states"} />;
}
