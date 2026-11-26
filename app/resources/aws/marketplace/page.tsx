import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "marketplace");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"marketplace"} />;
}
