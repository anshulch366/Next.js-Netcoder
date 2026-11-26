import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("mongodb", "course-data-api");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"mongodb"} lessonId={"course-data-api"} />;
}
