import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("angular", "course-http-interceptors");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"angular"} lessonId={"course-http-interceptors"} />;
}
