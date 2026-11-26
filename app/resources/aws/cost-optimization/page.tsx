import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "cost-optimization");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"cost-optimization"} />;
}
