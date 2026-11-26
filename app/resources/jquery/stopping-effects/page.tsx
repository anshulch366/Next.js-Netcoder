import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("jquery", "stop");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"jquery"} lessonId={"stop"} />;
}
