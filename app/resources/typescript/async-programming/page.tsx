import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("typescript", "async");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"typescript"} lessonId={"async"} />;
}
