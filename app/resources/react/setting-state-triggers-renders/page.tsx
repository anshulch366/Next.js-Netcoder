import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-setting-state-triggers-renders");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-setting-state-triggers-renders"} />;
}
