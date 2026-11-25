import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-fetching-data-with-effects");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-fetching-data-with-effects"} />;
}
