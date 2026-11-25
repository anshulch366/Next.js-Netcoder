import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-getting-a-ref-to-the-node");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-getting-a-ref-to-the-node"} />;
}
