import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "pricing-concepts");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"pricing-concepts"} />;
}
