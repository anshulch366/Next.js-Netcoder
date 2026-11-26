import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "dynamodb");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"dynamodb"} />;
}
