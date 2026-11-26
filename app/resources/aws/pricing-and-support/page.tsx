import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "pricing-support");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"pricing-support"} />;
}
