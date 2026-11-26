import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "regions");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"regions"} />;
}
