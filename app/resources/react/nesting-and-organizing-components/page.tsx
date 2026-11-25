import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-nesting-organizing");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-nesting-organizing"} />;
}
