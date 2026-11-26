import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("angular", "course-lists");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"angular"} lessonId={"course-lists"} />;
}
