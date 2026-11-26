import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("angular", "course-advanced-di");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"angular"} lessonId={"course-advanced-di"} />;
}
