import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-synchronizing-with-effects-recap");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-synchronizing-with-effects-recap"} />;
}
