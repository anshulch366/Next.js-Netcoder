import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-components-building-blocks");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-components-building-blocks"} />;
}
