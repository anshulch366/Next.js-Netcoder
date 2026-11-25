import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("java", "java-interview-q-a");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"java"} lessonId={"java-interview-q-a"} />;
}
