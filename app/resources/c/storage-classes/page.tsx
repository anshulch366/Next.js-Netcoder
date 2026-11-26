import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "storage-classes");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"storage-classes"} />;
}
