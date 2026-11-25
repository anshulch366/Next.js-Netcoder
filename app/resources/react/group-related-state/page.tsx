import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-group-related-state");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-group-related-state"} />;
}
