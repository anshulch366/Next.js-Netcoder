import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-initializing-the-application");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-initializing-the-application"} />;
}
