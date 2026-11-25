import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-when-to-use-refs");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-when-to-use-refs"} />;
}
