import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-reducer-dispatch-actions");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-reducer-dispatch-actions"} />;
}
