import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("cpp", "course-exceptions-errors");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"cpp"} lessonId={"course-exceptions-errors"} />;
}
