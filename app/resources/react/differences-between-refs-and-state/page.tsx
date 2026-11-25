import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-differences-between-refs-and-state");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-differences-between-refs-and-state"} />;
}
