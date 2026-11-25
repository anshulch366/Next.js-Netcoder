import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-accessing-another-components-dom-nodes");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-accessing-another-components-dom-nodes"} />;
}
