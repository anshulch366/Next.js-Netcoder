import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-side-effect-where");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-side-effect-where"} />;
}
