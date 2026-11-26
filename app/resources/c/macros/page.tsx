import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "macros");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"macros"} />;
}
