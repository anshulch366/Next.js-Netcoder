import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "dom-node-list");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"dom-node-list"} />;
}
