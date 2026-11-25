import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-lifecycle-of-reactive-effects");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-lifecycle-of-reactive-effects"} />;
}
