import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("nodejs", "course-monitoring");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"nodejs"} lessonId={"course-monitoring"} />;
}
