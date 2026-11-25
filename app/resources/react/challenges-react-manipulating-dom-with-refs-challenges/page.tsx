import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-manipulating-dom-with-refs-challenges");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-manipulating-dom-with-refs-challenges"} />;
}
