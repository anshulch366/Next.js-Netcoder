import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "specialized-use-cases");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"specialized-use-cases"} />;
}
