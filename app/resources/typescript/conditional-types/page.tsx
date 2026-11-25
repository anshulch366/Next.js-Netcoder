import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("typescript", "conditional-types");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"typescript"} lessonId={"conditional-types"} />;
}
