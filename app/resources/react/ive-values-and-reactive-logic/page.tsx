import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "reactive-values-and-reactive-logic");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"reactive-values-and-reactive-logic"} />;
}
