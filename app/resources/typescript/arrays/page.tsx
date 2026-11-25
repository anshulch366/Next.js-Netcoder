import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("typescript", "arrays");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"typescript"} lessonId={"arrays"} />;
}
