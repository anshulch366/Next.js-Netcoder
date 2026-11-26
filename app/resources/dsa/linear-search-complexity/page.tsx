import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("dsa", "course-complexity-linear");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"dsa"} lessonId={"course-complexity-linear"} />;
}
