import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "data-transfer-online");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"data-transfer-online"} />;
}
