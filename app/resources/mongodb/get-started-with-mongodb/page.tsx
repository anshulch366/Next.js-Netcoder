import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("mongodb", "course-get-started");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"mongodb"} lessonId={"course-get-started"} />;
}
