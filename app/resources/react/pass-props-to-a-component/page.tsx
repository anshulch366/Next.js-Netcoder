import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-props-pass");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-props-pass"} />;
}
