import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "networking");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"networking"} />;
}
