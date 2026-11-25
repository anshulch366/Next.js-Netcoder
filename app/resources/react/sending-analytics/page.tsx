import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-sending-analytics");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-sending-analytics"} />;
}
