import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-represent-state-with-usestate");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-represent-state-with-usestate"} />;
}
