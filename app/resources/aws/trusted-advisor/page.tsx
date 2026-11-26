import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "trusted-advisor");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"trusted-advisor"} />;
}
