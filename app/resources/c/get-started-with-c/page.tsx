import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "get-started");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"get-started"} />;
}
