import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-extracting-custom-hook-from-component");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-extracting-custom-hook-from-component"} />;
}
