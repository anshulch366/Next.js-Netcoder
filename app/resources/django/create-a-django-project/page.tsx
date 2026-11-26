import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("django", "course-create-project");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"django"} lessonId={"course-create-project"} />;
}
