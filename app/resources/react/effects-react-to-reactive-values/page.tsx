import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-effects-react-to-reactive-values");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-effects-react-to-reactive-values"} />;
}
