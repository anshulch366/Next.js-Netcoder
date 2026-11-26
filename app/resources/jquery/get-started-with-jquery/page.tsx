import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("jquery", "get-started");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"jquery"} lessonId={"get-started"} />;
}
