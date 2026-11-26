import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "elastic-file-system");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"elastic-file-system"} />;
}
