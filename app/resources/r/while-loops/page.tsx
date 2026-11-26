import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("r", "course-while-loop");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"r"} lessonId={"course-while-loop"} />;
}
