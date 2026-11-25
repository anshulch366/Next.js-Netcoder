import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-update-same-state-multiple-times");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-update-same-state-multiple-times"} />;
}
