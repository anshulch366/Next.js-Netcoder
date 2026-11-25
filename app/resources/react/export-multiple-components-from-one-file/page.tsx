import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-export-multiple");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-export-multiple"} />;
}
