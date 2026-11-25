import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-read-value-without-reacting-to-changes");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-read-value-without-reacting-to-changes"} />;
}
