import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "limits-h");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"limits-h"} />;
}
