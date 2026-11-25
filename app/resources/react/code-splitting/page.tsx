import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "scratch-code-splitting");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"scratch-code-splitting"} />;
}
