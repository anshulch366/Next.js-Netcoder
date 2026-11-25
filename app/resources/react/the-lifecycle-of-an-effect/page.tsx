import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-the-lifecycle-of-an-effect");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-the-lifecycle-of-an-effect"} />;
}
