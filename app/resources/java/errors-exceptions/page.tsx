import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("java", "java-ref-errors-exceptions");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"java"} lessonId={"java-ref-errors-exceptions"} />;
}
