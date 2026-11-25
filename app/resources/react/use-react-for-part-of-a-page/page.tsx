import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "existing-part-page");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"existing-part-page"} />;
}
