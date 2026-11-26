import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "serverless");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"serverless"} />;
}
