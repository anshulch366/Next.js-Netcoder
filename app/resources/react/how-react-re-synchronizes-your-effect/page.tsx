import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-how-react-resynchronizes-effect");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-how-react-resynchronizes-effect"} />;
}
