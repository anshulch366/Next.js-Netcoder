import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-adding-a-ref-to-your-component");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-adding-a-ref-to-your-component"} />;
}
