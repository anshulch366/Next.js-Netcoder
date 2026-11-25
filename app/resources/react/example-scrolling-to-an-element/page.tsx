import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-scroll-to-an-element-with-ref");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-scroll-to-an-element-with-ref"} />;
}
