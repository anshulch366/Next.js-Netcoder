import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "monitoring-intro");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"monitoring-intro"} />;
}
