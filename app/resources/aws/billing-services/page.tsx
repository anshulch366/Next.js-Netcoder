import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "billing-services");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"billing-services"} />;
}
