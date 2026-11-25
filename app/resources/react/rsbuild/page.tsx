import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "scratch-rsbuild");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"scratch-rsbuild"} />;
}
