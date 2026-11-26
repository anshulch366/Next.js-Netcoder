import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("dsa", "course-study-plan");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"dsa"} lessonId={"course-study-plan"} />;
}
