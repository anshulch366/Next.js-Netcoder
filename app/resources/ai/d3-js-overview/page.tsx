import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("ai", "course-graphics-d3");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"ai"} lessonId={"course-graphics-d3"} />;
}
