import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "c-function-parameters");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"c-function-parameters"} />;
}
