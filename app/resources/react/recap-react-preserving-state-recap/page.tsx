import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-preserving-state-recap");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-preserving-state-recap"} />;
}
