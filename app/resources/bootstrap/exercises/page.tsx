import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "exercises");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"exercises"} />;
}
