import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "xquery-example");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"xquery-example"} />;
}
