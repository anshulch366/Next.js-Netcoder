import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-separating-events-effects-recap");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-separating-events-effects-recap"} />;
}
