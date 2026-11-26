import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("angular", "course-get-started");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"angular"} lessonId={"course-get-started"} />;
}
