import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-same-component-same-position");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-same-component-same-position"} />;
}
