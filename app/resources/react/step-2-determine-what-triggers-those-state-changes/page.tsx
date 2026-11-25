import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-determine-state-change-triggers");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-determine-state-change-triggers"} />;
}
