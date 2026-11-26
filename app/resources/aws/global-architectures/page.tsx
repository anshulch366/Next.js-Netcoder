import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "global-architectures");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"global-architectures"} />;
}
