import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "quiz");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"quiz"} />;
}
