import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-first-recap");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-first-recap"} />;
}
