import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("java", "java-build-the-logic");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"java"} lessonId={"java-build-the-logic"} />;
}
