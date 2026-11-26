import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("angular", "course-server");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"angular"} lessonId={"course-server"} />;
}
