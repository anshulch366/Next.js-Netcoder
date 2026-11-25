import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("asp", "dependency-injection");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"asp"} lessonId={"dependency-injection"} />;
}
