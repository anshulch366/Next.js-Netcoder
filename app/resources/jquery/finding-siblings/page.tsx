import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("jquery", "siblings");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"jquery"} lessonId={"siblings"} />;
}
