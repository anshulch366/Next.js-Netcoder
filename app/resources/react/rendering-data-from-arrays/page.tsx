import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-list-map");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-list-map"} />;
}
