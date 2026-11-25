import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "reliability");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"reliability"} />;
}
