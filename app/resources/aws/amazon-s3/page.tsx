import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "s3");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"s3"} />;
}
