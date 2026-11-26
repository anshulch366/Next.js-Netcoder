import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "storage");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"storage"} />;
}
