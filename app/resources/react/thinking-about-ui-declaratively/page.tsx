import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-thinking-about-ui-declaratively");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-thinking-about-ui-declaratively"} />;
}
