import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("angular", "course-bootstrap-app");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"angular"} lessonId={"course-bootstrap-app"} />;
}
