import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("django", "course-include-models");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"django"} lessonId={"course-include-models"} />;
}
