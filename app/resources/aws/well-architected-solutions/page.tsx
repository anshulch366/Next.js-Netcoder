import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "well-architected-solutions");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"well-architected-solutions"} />;
}
