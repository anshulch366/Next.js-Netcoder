import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "schema");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"schema"} />;
}
