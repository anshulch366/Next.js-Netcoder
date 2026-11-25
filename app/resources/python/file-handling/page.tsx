import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-file-handling");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-file-handling"} />;
}
