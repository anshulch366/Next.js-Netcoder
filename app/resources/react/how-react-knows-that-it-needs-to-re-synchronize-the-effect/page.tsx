import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-how-react-knows-effect-needs-resynchronize");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-how-react-knows-effect-needs-resynchronize"} />;
}
