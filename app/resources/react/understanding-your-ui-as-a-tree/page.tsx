import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-understanding-ui-tree");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-understanding-ui-tree"} />;
}
