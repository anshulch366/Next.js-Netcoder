import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "cloud-security");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"cloud-security"} />;
}
