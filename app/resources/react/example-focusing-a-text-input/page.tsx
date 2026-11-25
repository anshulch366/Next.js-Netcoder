import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-focus-a-text-input-with-ref");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-focus-a-text-input-with-ref"} />;
}
