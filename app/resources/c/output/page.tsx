import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "output");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"output"} />;
}
