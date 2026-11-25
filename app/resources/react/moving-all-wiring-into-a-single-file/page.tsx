import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-moving-wiring-single-file");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-moving-wiring-single-file"} />;
}
