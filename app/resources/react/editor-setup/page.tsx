import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-editor-setup");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-editor-setup"} />;
}
