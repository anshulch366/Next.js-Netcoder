import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("angular", "course-services-di");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"angular"} lessonId={"course-services-di"} />;
}
