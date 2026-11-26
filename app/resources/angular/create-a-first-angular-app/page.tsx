import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("angular", "course-first-app");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"angular"} lessonId={"course-first-app"} />;
}
