import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("nodejs", "course-event-loop");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"nodejs"} lessonId={"course-event-loop"} />;
}
