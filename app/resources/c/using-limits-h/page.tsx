import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "c-limits-reference");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"c-limits-reference"} />;
}
