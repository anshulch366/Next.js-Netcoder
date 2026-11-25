import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-use-context-anywhere-in-tree");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-use-context-anywhere-in-tree"} />;
}
