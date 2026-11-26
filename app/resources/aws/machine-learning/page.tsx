import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "machine-learning");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"machine-learning"} />;
}
