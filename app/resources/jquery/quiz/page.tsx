import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("jquery", "quiz");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"jquery"} lessonId={"quiz"} />;
}
