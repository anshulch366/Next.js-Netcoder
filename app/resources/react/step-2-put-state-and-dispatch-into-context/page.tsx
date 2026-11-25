import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-put-state-and-dispatch-into-context");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-put-state-and-dispatch-into-context"} />;
}
