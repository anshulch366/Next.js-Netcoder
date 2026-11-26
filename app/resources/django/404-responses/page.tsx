import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("django", "course-404-template");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"django"} lessonId={"course-404-template"} />;
}
