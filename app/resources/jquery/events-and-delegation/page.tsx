import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("jquery", "events");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"jquery"} lessonId={"events"} />;
}
