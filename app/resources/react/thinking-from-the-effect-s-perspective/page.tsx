import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-thinking-from-effects-perspective");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-thinking-from-effects-perspective"} />;
}
