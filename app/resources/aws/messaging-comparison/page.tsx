import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "messaging-comparison");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"messaging-comparison"} />;
}
