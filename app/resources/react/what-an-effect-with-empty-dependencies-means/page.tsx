import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-effect-empty-dependencies");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-effect-empty-dependencies"} />;
}
