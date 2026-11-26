import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "practitioner-wrap-up");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"practitioner-wrap-up"} />;
}
