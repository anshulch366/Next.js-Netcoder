import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-sending-a-post-request");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-sending-a-post-request"} />;
}
