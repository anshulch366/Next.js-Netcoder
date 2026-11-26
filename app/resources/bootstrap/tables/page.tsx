import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "tables");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"tables"} />;
}
