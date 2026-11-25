import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "c-input-validation");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"c-input-validation"} />;
}
