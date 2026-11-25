import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-passing-data-to-the-parent");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-passing-data-to-the-parent"} />;
}
