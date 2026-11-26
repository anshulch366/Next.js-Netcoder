import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "operators");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"operators"} />;
}
