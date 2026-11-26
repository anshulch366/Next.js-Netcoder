import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "data-analytics");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"data-analytics"} />;
}
