import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("jquery", "certificate");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"jquery"} lessonId={"certificate"} />;
}
