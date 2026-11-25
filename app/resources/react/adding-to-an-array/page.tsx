import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-add-to-array");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-add-to-array"} />;
}
