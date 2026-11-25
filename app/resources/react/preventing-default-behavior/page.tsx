import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-preventing-default-behavior");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-preventing-default-behavior"} />;
}
