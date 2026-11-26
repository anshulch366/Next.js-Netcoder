import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "user-access");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"user-access"} />;
}
