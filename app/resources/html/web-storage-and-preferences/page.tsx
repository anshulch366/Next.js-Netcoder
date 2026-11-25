import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "storage");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"storage"} />;
}
