import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("ai", "course-history-intelligence");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"ai"} lessonId={"course-history-intelligence"} />;
}
