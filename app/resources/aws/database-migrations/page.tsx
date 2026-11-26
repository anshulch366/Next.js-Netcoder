import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "database-migrations");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"database-migrations"} />;
}
