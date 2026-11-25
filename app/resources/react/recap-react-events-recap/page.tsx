import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-events-recap");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-events-recap"} />;
}
