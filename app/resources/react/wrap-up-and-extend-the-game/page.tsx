import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "tictactoe-wrap-up");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"tictactoe-wrap-up"} />;
}
