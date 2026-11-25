import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "event-page");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"event-page"} />;
}
