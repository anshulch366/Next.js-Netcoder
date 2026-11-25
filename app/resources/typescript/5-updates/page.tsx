import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("typescript", "typescript-5");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"typescript"} lessonId={"typescript-5"} />;
}
