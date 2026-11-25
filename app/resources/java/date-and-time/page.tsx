import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("java", "java-ref-date-and-time");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"java"} lessonId={"java-ref-date-and-time"} />;
}
