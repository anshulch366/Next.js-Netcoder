import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "dms");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"dms"} />;
}
