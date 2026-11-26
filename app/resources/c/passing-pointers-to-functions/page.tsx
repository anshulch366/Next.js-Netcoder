import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "pass-by-reference");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"pass-by-reference"} />;
}
