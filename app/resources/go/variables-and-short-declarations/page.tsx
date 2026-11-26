import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("go", "course-variables");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"go"} lessonId={"course-variables"} />;
}
