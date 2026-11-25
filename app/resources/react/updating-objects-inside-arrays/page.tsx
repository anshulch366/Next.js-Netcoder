import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-objects-inside-arrays");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-objects-inside-arrays"} />;
}
