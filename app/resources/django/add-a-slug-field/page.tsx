import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("django", "course-slug-field");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"django"} lessonId={"course-slug-field"} />;
}
