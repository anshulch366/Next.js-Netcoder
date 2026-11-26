import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "certificate");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"certificate"} />;
}
