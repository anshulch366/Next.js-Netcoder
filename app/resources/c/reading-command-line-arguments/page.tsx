import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "c-command-line-args");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"c-command-line-args"} />;
}
