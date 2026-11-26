import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "stdio-h");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"stdio-h"} />;
}
