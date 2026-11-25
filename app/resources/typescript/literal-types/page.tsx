import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("typescript", "literal-types");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"typescript"} lessonId={"literal-types"} />;
}
