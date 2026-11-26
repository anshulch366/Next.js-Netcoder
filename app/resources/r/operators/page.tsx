import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("r", "course-operators");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"r"} lessonId={"course-operators"} />;
}
