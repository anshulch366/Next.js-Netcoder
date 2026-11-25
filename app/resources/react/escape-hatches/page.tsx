import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-escape-hatches");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-escape-hatches"} />;
}
