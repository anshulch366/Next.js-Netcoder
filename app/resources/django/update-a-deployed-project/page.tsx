import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("django", "course-update-project");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"django"} lessonId={"course-update-project"} />;
}
