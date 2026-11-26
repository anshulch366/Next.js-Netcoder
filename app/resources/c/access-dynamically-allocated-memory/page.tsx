import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "access-memory");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"access-memory"} />;
}
