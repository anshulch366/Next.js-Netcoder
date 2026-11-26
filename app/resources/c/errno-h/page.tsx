import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "errno-h");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"errno-h"} />;
}
