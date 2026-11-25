import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-browser-paint");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-browser-paint"} />;
}
