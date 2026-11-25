import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-root-component-file");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-root-component-file"} />;
}
