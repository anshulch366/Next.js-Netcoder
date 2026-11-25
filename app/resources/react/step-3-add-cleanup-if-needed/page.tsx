import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-add-effect-cleanup");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-add-effect-cleanup"} />;
}
