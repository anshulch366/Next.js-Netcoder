import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "availability-zones");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"availability-zones"} />;
}
