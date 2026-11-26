import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "xsd-text-only");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"xsd-text-only"} />;
}
