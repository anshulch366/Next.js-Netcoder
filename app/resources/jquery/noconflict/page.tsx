import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("jquery", "no-conflict");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"jquery"} lessonId={"no-conflict"} />;
}
