import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "function-declaration");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"function-declaration"} />;
}
