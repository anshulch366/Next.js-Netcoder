import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-purity-formula");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-purity-formula"} />;
}
