import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-updating-nested-object");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-updating-nested-object"} />;
}
