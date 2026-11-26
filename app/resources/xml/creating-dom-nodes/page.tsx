import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "dom-create-nodes");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"dom-create-nodes"} />;
}
