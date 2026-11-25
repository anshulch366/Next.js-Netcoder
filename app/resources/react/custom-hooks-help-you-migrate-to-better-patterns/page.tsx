import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("react", "react-custom-hooks-migrate-to-better-patterns");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"react"} lessonId={"react-custom-hooks-migrate-to-better-patterns"} />;
}
