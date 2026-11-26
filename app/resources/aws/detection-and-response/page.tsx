import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "detection-response");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"detection-response"} />;
}
