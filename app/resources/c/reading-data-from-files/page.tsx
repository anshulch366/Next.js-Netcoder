import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "c-read-files");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"c-read-files"} />;
}
