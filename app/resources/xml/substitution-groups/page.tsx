import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "xsd-substitution");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"xsd-substitution"} />;
}
