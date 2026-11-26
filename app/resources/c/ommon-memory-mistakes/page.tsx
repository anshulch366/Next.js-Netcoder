import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "memory-mistakes");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"memory-mistakes"} />;
}
