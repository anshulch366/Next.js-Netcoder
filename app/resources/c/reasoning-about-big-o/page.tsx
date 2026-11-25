import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "c-big-o");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"c-big-o"} />;
}
