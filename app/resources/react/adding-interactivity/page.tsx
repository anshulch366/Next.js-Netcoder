import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-adding-interactivity");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-adding-interactivity"} />;
}
