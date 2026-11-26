import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("nodejs", "course-socket-io");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"nodejs"} lessonId={"course-socket-io"} />;
}
