import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("go", "collections");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"go"} lessonId={"collections"} />;
}
