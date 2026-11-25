import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-prove-value-is-not-a-dependency");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-prove-value-is-not-a-dependency"} />;
}
