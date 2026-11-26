import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "utilities");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"utilities"} />;
}
