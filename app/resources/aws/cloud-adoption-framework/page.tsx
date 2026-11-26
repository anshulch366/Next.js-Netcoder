import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "caf");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"caf"} />;
}
