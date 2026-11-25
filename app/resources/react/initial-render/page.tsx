import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-initial-render");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-initial-render"} />;
}
