import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("ai", "course-stats-intro");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"ai"} lessonId={"course-stats-intro"} />;
}
