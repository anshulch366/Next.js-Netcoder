import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("typescript", "namespaces");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"typescript"} lessonId={"namespaces"} />;
}
