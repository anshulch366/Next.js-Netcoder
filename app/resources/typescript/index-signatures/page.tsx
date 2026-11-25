import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("typescript", "index-signatures");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"typescript"} lessonId={"index-signatures"} />;
}
