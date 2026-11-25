import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-notifying-parent-components-about-state-changes");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-notifying-parent-components-about-state-changes"} />;
}
