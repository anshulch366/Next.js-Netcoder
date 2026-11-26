import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("ai", "course-math-matrices");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"ai"} lessonId={"course-math-matrices"} />;
}
