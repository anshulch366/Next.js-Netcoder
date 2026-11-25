import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "basics");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"basics"} />;
}
