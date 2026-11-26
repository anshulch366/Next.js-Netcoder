import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "reallocate-memory");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"reallocate-memory"} />;
}
