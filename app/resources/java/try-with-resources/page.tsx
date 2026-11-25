import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("java", "java-try-with-resources");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"java"} lessonId={"java-try-with-resources"} />;
}
