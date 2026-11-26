import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "errors");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"errors"} />;
}
