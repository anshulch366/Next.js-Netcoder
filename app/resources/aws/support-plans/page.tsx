import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "support-plans");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"support-plans"} />;
}
