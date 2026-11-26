import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "ai-ml-aws");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"ai-ml-aws"} />;
}
