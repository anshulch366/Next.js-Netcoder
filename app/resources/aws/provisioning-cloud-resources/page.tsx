import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "provision");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"provision"} />;
}
