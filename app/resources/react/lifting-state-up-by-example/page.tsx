import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-lifting-state-up-example");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-lifting-state-up-example"} />;
}
