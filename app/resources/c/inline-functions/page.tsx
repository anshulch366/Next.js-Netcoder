import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "inline-functions");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"inline-functions"} />;
}
