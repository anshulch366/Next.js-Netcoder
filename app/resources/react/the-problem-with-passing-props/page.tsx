import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-problem-with-passing-props-deeply");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-problem-with-passing-props-deeply"} />;
}
