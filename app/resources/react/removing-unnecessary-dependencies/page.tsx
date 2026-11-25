import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-removing-unnecessary-dependencies");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-removing-unnecessary-dependencies"} />;
}
