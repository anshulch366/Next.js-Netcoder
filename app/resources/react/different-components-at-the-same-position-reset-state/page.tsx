import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-different-components-same-position");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-different-components-same-position"} />;
}
