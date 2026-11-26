import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("django", "course-connect-database");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"django"} lessonId={"course-connect-database"} />;
}
