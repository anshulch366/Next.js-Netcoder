import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("postgresql", "queries");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"postgresql"} lessonId={"queries"} />;
}
