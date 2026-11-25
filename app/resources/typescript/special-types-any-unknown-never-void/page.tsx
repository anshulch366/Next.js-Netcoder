import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("typescript", "special-types");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"typescript"} lessonId={"special-types"} />;
}
