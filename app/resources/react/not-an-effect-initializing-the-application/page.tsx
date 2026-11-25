import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-not-effect-initializing-application");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-not-effect-initializing-application"} />;
}
