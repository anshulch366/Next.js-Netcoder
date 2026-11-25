import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-use-component");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-use-component"} />;
}
