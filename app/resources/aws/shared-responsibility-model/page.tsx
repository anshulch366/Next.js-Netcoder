import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "shared-responsibility");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"shared-responsibility"} />;
}
