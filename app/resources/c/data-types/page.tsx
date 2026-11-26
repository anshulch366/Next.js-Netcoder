import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "data-types");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"data-types"} />;
}
