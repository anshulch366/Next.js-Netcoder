import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "genai-more");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"genai-more"} />;
}
