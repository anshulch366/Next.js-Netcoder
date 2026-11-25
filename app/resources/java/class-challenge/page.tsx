import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("java", "java-class-challenge");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"java"} lessonId={"java-class-challenge"} />;
}
