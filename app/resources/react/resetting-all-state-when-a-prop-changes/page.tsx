import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-resetting-all-state-when-prop-changes");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-resetting-all-state-when-prop-changes"} />;
}
