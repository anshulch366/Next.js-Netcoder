import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-object-state-recap");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-object-state-recap"} />;
}
