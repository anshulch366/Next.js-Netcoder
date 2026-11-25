import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-copy-objects-spread");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-copy-objects-spread"} />;
}
