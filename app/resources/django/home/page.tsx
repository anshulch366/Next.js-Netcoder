import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("django", "course-course-home");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"django"} lessonId={"course-course-home"} />;
}
