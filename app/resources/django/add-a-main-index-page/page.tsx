import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("django", "course-main-index");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"django"} lessonId={"course-main-index"} />;
}
