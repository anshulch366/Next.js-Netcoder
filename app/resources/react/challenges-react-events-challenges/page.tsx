import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-events-challenges");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-events-challenges"} />;
}
