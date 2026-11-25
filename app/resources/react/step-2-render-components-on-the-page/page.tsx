import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "existing-render-components");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"existing-render-components"} />;
}
