import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "c-ctype-reference");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"c-ctype-reference"} />;
}
