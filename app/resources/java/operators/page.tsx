import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("java", "java-operators");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"java"} lessonId={"java-operators"} />;
}
