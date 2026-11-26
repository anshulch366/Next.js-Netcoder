import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "data-pipelines");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"data-pipelines"} />;
}
