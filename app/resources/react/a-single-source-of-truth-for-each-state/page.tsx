import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-single-source-of-truth");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-single-source-of-truth"} />;
}
