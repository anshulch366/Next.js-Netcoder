import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("ai", "prompts");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"ai"} lessonId={"prompts"} />;
}
