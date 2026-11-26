import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "cloud-certification");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"cloud-certification"} />;
}
