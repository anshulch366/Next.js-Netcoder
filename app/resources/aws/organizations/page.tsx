import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "organizations");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"organizations"} />;
}
