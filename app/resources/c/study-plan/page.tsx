import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "study-plan");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"study-plan"} />;
}
