import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "c-size-and-integer-reference");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"c-size-and-integer-reference"} />;
}
