import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("r", "course-get-started");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"r"} lessonId={"course-get-started"} />;
}
