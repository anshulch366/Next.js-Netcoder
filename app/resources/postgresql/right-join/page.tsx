import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("postgresql", "course-right-join");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"postgresql"} lessonId={"course-right-join"} />;
}
