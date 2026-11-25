import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-specify-effect-dependencies");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-specify-effect-dependencies"} />;
}
