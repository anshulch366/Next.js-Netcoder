import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("angular", "course-lifecycle");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"angular"} lessonId={"course-lifecycle"} />;
}
