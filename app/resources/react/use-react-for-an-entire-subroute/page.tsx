import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "existing-subroute");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"existing-subroute"} />;
}
