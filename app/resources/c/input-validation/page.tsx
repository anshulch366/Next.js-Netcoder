import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "input-validation");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"input-validation"} />;
}
