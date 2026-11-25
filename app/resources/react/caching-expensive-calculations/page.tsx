import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-caching-expensive-calculations");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-caching-expensive-calculations"} />;
}
