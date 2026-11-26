import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("angular", "course-components");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"angular"} lessonId={"course-components"} />;
}
