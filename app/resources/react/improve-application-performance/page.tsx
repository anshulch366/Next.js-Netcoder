import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "scratch-performance");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"scratch-performance"} />;
}
