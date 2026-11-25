import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("postgresql", "transactions-indexes");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"postgresql"} lessonId={"transactions-indexes"} />;
}
