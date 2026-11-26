import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("angular", "course-ssr-hydration");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"angular"} lessonId={"course-ssr-hydration"} />;
}
