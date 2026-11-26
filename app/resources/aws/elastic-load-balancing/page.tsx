import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "elastic-load-balancing");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"elastic-load-balancing"} />;
}
