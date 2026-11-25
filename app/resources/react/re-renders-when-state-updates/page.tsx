import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-rerenders-on-state-updates");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-rerenders-on-state-updates"} />;
}
