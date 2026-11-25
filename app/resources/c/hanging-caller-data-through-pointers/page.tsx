import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "c-pass-by-reference");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"c-pass-by-reference"} />;
}
