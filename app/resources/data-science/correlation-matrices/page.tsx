import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("data-science", "course-correlation-matrix");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"data-science"} lessonId={"course-correlation-matrix"} />;
}
