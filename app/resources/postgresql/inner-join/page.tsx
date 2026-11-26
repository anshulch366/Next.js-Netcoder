import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("postgresql", "course-inner-join");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"postgresql"} lessonId={"course-inner-join"} />;
}
