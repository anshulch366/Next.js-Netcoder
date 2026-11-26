import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "command-line-args");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"command-line-args"} />;
}
