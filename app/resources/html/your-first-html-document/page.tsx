import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "document");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"document"} />;
}
