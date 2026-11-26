import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "dom-add-nodes");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"dom-add-nodes"} />;
}
