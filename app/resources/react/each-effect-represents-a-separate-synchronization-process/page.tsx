import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-each-effect-separate-process");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-each-effect-separate-process"} />;
}
