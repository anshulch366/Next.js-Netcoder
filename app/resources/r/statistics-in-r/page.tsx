import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("r", "course-statistics-intro");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"r"} lessonId={"course-statistics-intro"} />;
}
