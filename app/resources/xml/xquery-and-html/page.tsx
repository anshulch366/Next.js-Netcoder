import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "xquery-html");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"xquery-html"} />;
}
