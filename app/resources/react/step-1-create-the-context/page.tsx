import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-create-the-context");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-create-the-context"} />;
}
