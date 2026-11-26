import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "xsd-how-to");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"xsd-how-to"} />;
}
