import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("typescript", "explicit-inference");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"typescript"} lessonId={"explicit-inference"} />;
}
