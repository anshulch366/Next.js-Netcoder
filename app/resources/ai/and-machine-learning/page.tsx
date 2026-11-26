import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("ai", "course-ai-and-ml");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"ai"} lessonId={"course-ai-and-ml"} />;
}
