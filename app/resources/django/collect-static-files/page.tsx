import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("django", "course-collect-static");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"django"} lessonId={"course-collect-static"} />;
}
