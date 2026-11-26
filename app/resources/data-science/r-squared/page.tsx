import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("data-science", "course-regression-r-squared");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"data-science"} lessonId={"course-regression-r-squared"} />;
}
