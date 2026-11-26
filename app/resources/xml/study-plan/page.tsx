import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "study-plan");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"study-plan"} />;
}
