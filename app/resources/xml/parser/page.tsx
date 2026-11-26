import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "parser");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"parser"} />;
}
