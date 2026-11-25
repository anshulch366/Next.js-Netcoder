import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-arrays-without-mutation");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-arrays-without-mutation"} />;
}
