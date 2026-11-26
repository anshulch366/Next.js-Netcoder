import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("data-science", "course-functions");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"data-science"} lessonId={"course-functions"} />;
}
