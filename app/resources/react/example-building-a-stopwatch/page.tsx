import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-stopwatch-with-refs");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-stopwatch-with-refs"} />;
}
