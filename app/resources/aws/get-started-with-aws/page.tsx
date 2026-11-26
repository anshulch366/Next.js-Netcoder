import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "get-started");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"get-started"} />;
}
