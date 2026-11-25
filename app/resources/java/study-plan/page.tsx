import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("java", "java-study-plan");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"java"} lessonId={"java-study-plan"} />;
}
