import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "event-card");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"event-card"} />;
}
