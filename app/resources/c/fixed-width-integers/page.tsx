import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "fixed-width-integers");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"fixed-width-integers"} />;
}
