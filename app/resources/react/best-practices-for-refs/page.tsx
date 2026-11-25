import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-best-practices-for-refs");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-best-practices-for-refs"} />;
}
