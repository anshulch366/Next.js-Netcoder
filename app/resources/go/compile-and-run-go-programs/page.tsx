import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("go", "course-compiler");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"go"} lessonId={"course-compiler"} />;
}
