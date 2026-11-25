import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-change-dependencies-by-changing-code");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-change-dependencies-by-changing-code"} />;
}
