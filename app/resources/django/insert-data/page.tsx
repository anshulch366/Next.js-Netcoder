import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("django", "course-insert-data");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"django"} lessonId={"course-insert-data"} />;
}
