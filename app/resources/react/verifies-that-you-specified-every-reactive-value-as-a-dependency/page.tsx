import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-effect-dependencies-linter");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-effect-dependencies-linter"} />;
}
