import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("java", "java-i-o-streams");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"java"} lessonId={"java-i-o-streams"} />;
}
