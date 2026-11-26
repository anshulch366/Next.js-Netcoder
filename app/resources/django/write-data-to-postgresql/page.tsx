import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("django", "course-postgres-add-data");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"django"} lessonId={"course-postgres-add-data"} />;
}
