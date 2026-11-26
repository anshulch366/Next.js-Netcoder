import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("django", "course-details-link");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"django"} lessonId={"course-details-link"} />;
}
