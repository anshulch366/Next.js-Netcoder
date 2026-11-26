import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "dom-get-values");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"dom-get-values"} />;
}
