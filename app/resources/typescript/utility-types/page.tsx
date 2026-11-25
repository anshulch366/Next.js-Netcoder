import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("typescript", "utility-types");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"typescript"} lessonId={"utility-types"} />;
}
