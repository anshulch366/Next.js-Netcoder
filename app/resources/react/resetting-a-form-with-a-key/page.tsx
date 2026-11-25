import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-reset-form-with-key");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-reset-form-with-key"} />;
}
