import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "files-read");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"files-read"} />;
}
