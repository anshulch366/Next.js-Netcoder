import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "storage-comparison");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"storage-comparison"} />;
}
