import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("angular", "binding");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"angular"} lessonId={"binding"} />;
}
