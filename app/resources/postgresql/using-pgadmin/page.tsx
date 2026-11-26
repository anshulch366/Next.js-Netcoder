import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("postgresql", "course-pgadmin");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"postgresql"} lessonId={"course-pgadmin"} />;
}
