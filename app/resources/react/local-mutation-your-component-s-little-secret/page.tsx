import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-local-mutation");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-local-mutation"} />;
}
