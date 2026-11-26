import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "instance-stores");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"instance-stores"} />;
}
