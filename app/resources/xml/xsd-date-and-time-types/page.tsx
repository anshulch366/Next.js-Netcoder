import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "xsd-date-time");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"xsd-date-time"} />;
}
