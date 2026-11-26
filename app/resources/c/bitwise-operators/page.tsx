import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "bitwise-operators");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"bitwise-operators"} />;
}
