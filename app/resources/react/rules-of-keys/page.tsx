import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-list-key-rules");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-list-key-rules"} />;
}
