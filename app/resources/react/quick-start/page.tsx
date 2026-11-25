import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "quick-start");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"quick-start"} />;
}
