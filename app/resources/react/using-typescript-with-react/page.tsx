import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-using-typescript");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-using-typescript"} />;
}
