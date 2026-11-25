import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "tic-tac-toe");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"tic-tac-toe"} />;
}
