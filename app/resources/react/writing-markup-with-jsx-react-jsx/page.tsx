import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-jsx");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-jsx"} />;
}
