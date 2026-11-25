import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-input-state-recap");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-input-state-recap"} />;
}
