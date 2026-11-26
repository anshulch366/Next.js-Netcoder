import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("ai", "course-graphics-chartjs");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"ai"} lessonId={"course-graphics-chartjs"} />;
}
