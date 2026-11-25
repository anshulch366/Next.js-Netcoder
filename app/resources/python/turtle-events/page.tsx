import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-turtle-events");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-turtle-events"} />;
}
