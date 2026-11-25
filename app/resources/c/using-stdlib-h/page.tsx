import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "c-stdlib-reference");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"c-stdlib-reference"} />;
}
