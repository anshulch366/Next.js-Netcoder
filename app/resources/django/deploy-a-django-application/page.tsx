import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("django", "course-deploy");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"django"} lessonId={"course-deploy"} />;
}
