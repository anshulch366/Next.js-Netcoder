import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("postgresql", "schema");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"postgresql"} lessonId={"schema"} />;
}
