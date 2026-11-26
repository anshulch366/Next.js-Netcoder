import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("mongodb", "course-update");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"mongodb"} lessonId={"course-update"} />;
}
