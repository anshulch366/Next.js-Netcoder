import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "existing-modular-js");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"existing-modular-js"} />;
}
