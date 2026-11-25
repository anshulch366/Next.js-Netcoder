import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-dependencies-should-match-code");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-dependencies-should-match-code"} />;
}
