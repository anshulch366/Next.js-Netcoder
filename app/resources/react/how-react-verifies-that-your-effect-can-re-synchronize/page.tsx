import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-how-react-verifies-effect-can-resynchronize");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-how-react-verifies-effect-can-resynchronize"} />;
}
