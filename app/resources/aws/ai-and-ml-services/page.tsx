import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "ai-ml-services");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"ai-ml-services"} />;
}
