import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "scratch-vite");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"scratch-vite"} />;
}
