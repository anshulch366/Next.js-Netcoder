import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "c-file-challenges");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"c-file-challenges"} />;
}
