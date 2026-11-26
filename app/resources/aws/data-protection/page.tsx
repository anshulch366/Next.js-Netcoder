import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "data-protection");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"data-protection"} />;
}
