import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("java", "collections");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"java"} lessonId={"collections"} />;
}
