import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "intro");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"intro"} />;
}
