import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-writing-reducers-well");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-writing-reducers-well"} />;
}
