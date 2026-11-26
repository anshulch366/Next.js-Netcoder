import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "build-logic");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"build-logic"} />;
}
