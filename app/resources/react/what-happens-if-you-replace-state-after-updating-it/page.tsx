import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-queue-replacement-after-update");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-queue-replacement-after-update"} />;
}
