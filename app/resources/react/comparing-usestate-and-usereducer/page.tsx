import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-comparing-usestate-and-usereducer");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-comparing-usestate-and-usereducer"} />;
}
