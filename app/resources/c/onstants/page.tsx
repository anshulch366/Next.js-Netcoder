import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "constants");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"constants"} />;
}
