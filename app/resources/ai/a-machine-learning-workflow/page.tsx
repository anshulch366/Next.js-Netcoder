import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("ai", "workflow");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"ai"} lessonId={"workflow"} />;
}
