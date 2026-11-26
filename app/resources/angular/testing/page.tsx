import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("angular", "course-testing");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"angular"} lessonId={"course-testing"} />;
}
