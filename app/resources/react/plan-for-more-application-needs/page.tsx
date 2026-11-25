import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "scratch-more-patterns");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"scratch-more-patterns"} />;
}
