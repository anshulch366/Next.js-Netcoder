import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "typography");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"typography"} />;
}
