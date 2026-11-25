import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-referencing-values-with-refs");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-referencing-values-with-refs"} />;
}
