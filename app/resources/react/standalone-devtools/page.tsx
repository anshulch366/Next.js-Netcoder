import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-devtools-standalone");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-devtools-standalone"} />;
}
