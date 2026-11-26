import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "generative-ai-services");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"generative-ai-services"} />;
}
