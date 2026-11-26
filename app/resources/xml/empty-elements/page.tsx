import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "xsd-empty");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"xsd-empty"} />;
}
