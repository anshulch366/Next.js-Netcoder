import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("dsa", "course-dynamic-programming");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"dsa"} lessonId={"course-dynamic-programming"} />;
}
