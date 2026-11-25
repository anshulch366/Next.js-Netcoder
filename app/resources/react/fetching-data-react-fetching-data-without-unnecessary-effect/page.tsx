import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-fetching-data-without-unnecessary-effect");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-fetching-data-without-unnecessary-effect"} />;
}
