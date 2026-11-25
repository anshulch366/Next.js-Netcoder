import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-effects-whenever-synchronization-needed");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-effects-whenever-synchronization-needed"} />;
}
