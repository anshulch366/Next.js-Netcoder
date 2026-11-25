import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("mysql", "queries");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"mysql"} lessonId={"queries"} />;
}
