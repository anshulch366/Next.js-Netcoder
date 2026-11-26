import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("jquery", "study-plan");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"jquery"} lessonId={"study-plan"} />;
}
