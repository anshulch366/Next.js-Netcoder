import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-why-synchronization-may-repeat");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-why-synchronization-may-repeat"} />;
}
