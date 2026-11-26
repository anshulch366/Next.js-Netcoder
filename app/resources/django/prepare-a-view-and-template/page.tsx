import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("django", "course-prepare-view-template");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"django"} lessonId={"course-prepare-view-template"} />;
}
