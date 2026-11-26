import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "ec2-instance-types");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"ec2-instance-types"} />;
}
