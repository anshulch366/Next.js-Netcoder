import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-module-dependency-tree");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-module-dependency-tree"} />;
}
