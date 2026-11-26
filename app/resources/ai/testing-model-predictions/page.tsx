import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("ai", "course-ml-testing");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"ai"} lessonId={"course-ml-testing"} />;
}
