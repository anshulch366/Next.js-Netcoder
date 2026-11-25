import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "scratch-data-fetching");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"scratch-data-fetching"} />;
}
