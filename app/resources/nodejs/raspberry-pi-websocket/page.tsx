import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("nodejs", "course-raspi-websocket");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"nodejs"} lessonId={"course-raspi-websocket"} />;
}
