import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "wsdl");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"wsdl"} />;
}
