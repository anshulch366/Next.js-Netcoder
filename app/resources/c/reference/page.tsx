import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "reference");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"reference"} />;
}
