import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "tictactoe-past-moves");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"tictactoe-past-moves"} />;
}
