import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("ai", "responsible-ai");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"ai"} lessonId={"responsible-ai"} />;
}
