import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "ref-element");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"ref-element"} />;
}
