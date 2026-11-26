import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "trees");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"trees"} />;
}
